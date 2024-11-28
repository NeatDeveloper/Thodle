import { Composer } from 'grammy';
import User from '@repo/db/user';

const commands = new Composer<APP.Context>();

commands.command('start', async (__context__) => {

    const user = await User.create({
        tgID: __context__.from?.id as number,
        lastName: __context__.from?.last_name as string,
        firstName: __context__.from?.first_name as string,
        username: __context__.from?.username as string,
        isPremium: __context__.from?.is_premium || false,
        lang: __context__.from?.language_code || 'ru',
        amplua: {
            create: { }
        },
        role: 'R_0',
        settings: {
            create: {
                mailing: {
                    create: {}
                }
            }
        }
    })
    await __context__.reply('Привет')
});

export default commands;
