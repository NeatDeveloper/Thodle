import prisma from '..';
import type { Prisma } from '@prisma/client';
import { generate } from '@repo/utils/crypto';

export default {
    create: async (data: Prisma.UserCreateInput) => {
        try {
            const user = await prisma.user.create({
                data: {
                    ...data,
                    id: generate(12)
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
            let where: Prisma.UserWhereUniqueInput | null =
                typeof id === 'string' ? { id } :
                typeof id === 'number' ? { tgID: id } :
                null;

            if(!where) return null;

            const user = await prisma.user.findUnique({
                where
            });

            return user;
        } catch { return null }
    }
}
