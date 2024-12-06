import prisma from '..';
import type { Prisma } from '@prisma/client';
import { generate } from '@repo/utils/crypto';

export default {
    create: async (data: Prisma.ProfileCreateInput) => {
        try {
            const user = await prisma.user.create({
                data: {
                    id: generate(12),
                    role: 'R_0',
                    amplua: {
                        create: { }
                    },
                    meta: {
                        create: {}
                    },
                    profile: {
                        create: data
                    },
                    settings: {
                        create: {
                            mailing: {
                                create: {}
                            },
                            schedule: {
                                create: {}
                            },
                            theme: {
                                create: {}
                            }
                        }
                    }
                }
            });

            return user;
        } catch(__error__) {
            console.log(__error__)
            return null;
         }
    },
    findUnique: async (id: string | number) => {
        try {
            let where: Prisma.UserWhereInput | null =
                typeof id === 'string' ? { id } :
                typeof id === 'number' ? {
                    profile: {
                        tgID: id
                    }
                 } :
                null;

            if(!where) return null;

            const user = await prisma.user.findFirst({
                where,
                include: {}
            });

            return user;
        } catch { return null }
    }
}
