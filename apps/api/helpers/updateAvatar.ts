import prisma from "@repo/db"
import ms from 'ms';

export default async (user: DB.User.InApiContext, avatar: string) => {
    try {
        const threeHoursAgo = new Date(Date.now() - ms('3h'));

        const result = await prisma.profile.update({
            where: {
                id: user.id,
                OR: [
                    { avatarUpdatedAt: null },
                    { avatarUpdatedAt: { lt: threeHoursAgo } }
                ]
            },
            data: {
                avatar,
                avatarUpdatedAt: new Date()
            }
        })

    } catch {}
}
