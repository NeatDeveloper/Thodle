import { Prisma, PrismaClient } from '@prisma/client'
import object from '@repo/utils/object';

const omit = {
    createdAt: true,
    updatedAt: true,
    id: true
}

const userInclude: Prisma.UserInclude = {
    _count: true,
    amplua: {
        omit,
        include: {
            curator: {
                omit: {
                    createdAt: true,
                    updatedAt: true,
                }
            },
            groupHead: { omit },
            lector: { omit },
            student: { omit },
            tutor: { omit }
        }
    },
    meta: {
        omit: {
            updatedAt: true,
            id: true
        }
    },
    // devices: {
    //     omit: {
    //         id: true,
    //         userID: true,
    //     }
    // },
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
            theme: {
                omit: {
                    id: true
                }
            }
        }
    }
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

                const result = await query(args);

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
