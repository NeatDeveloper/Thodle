import { Prisma, PrismaClient } from '@prisma/client'
import object from '@repo/utils/object';

const omit = {
    createdAt: true,
    updatedAt: true,
    id: true
}

export const userInclude = {
    amplua: {
        omit,
        include: {
            curator: true,
            groupHead: true,
            lector: true,
            student: true,
            tutor: true
        }
    },
    options: {
        omit: {
            id: true
        }
    },
    profile:  { omit },
    settings: {
        omit,
        include: {
            mailing: {
                omit: {
                    id: true
                },
            },
            schedule: {
                omit: {
                    id: true
                }
            },
            miniapp: {
                omit: {
                    id: true
                }
            }
        }
    }
}

const checkResult = async (user: DB.User.DTO | null): Promise<DB.User.DTO | null> => {
    if(!user) return user;

    if(!user?.settings) {
        user.settings = await prisma.settings.create({
            data: {
                id: user.id,
                mailing: {
                    create: {}
                },
                schedule: {
                    create: {}
                },
                miniapp: {
                    create: { }
                }
            },
            ...userInclude.settings
        });
    }

    if(!user.settings?.mailing) {
        user.settings.mailing = await prisma.mailingSettings.create({
            data: {
                id: user.id,
            },
            omit: userInclude.settings.include.mailing.omit
        });
    }
    if(!user.settings?.miniapp) {
        user.settings.miniapp = await prisma.miniappSettings.create({
            data: {
                id: user.id,
            },
            omit: userInclude.settings.include.miniapp.omit
        });
    }
    if(!user.settings?.schedule) {
        user.settings.schedule = await prisma.scheduleSettings.create({
            data: {
                id: user.id,
            },
            omit: userInclude.settings.include.schedule.omit
        });
    }

    return user;
}

const prisma = new PrismaClient().$extends({
    query: {
        $allOperations: async ({ model, operation, args, query }) => {
            const result = await query(args);

            return object.serialize(result);
        },
        user: {
            findUnique: async ({ model, operation, args, query }) => {
                args.include = userInclude;

                let result = await query(args);

                result = await checkResult(result);

                return result;
            },
            findMany: async ({ model, operation, args, query }) => {
                args.include = userInclude

                const result = await query(args);

                return result;
            },
            findFirst: async ({ model, operation, args, query }) => {
                if(!args.include) args.include = userInclude

                const result = await query(args);

                return result;
            },
        }
    }
});

export default prisma;
