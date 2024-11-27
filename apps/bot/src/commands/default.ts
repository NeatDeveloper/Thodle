import { Composer } from 'grammy';
import prisma from '@repo/db';

const commands = new Composer<APP.Context>();

commands.command('start', async (__context__) => {

    const currentUser = await prisma.user.findUnique({
        where: { tgID: __context__.from?.id || 0 }
    });

    if(!currentUser) {
        await prisma.user.create({
            data: {
                tgID: __context__.from?.id as number,
                lastName: __context__.from?.last_name,
                firstName: __context__.from?.first_name,
                username: __context__.from?.username,
                isPremium: __context__.from?.is_premium || false,
                lang: __context__.from?.language_code || 'ru',
                amplua: {
                    create: {

                    }
                },
                settings: {
                    create: {
                        mailing: {
                            create: {}
                        }
                    }
                }
            }
        });

        await __context__.reply('Зареган')
    }
    await __context__.reply('Привет')
});

export default commands;
