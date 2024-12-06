import prisma from "@repo/db"

export default async (user: APP.Context['Variables']['user'], avatar: string) => {
    try {
        await prisma.profile.update({
            where: {
                id: user.id
            },
            data: {
                avatar
            }
        })
    } catch {}
}
