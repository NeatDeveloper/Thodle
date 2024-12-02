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
                },
                include: {
                    _count: true,
                    amplua: {
                        select: {
                            curator: true,
                            groupHead: true,
                            lector: true,
                            role: true,
                            student: true,
                            tutor: true
                        }
                    },
                    devices: {
                        select: {
                            os: true,
                            ip: true,
                            device: true
                        }
                    },
                    profile: {
                        select: {
                            avatar: true,
                            isPremium: true,
                            firstName: true,
                            lang: true,
                            lastName: true,
                            tgID: true,
                            username: true
                        }
                    },
                    settings: {
                        select: {
                            mailing: {
                                select: {
                                    canISend: true
                                }
                            },
                            schedule: {
                                select: {
                                    shortLessonName: true
                                }
                            },
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
                include: {
                    _count: true,
                    amplua: {
                        select: {
                            curator: true,
                            groupHead: true,
                            lector: true,
                            role: true,
                            student: true,
                            tutor: true
                        }
                    },
                    devices: {
                        select: {
                            os: true,
                            ip: true,
                            device: true
                        }
                    },
                    profile: {
                        select: {
                            avatar: true,
                            isPremium: true,
                            firstName: true,
                            lang: true,
                            lastName: true,
                            tgID: true,
                            username: true
                        }
                    },
                    settings: {
                        select: {
                            mailing: {
                                select: {
                                    canISend: true
                                }
                            },
                            schedule: {
                                select: {
                                    shortLessonName: true
                                }
                            },
                        }
                    }
                }
            });

            return user;
        } catch { return null }
    }
}
