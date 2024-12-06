import { Composer } from 'grammy';
import User from '@repo/db/user';
import object from '@repo/utils/object';
import prisma from '@repo/db';

const commands = new Composer<APP.Context>();

commands.command('start', async (__context__) => {

    let user = await prisma.user.findFirst({
        where: {
            profile: {
                tgID: __context__.from?.id
            }
        }
    });

    if (!user) user = await User.create({
        tgID: __context__.from?.id as number,
        lastName : __context__.from?.last_name as string,
        firstName: __context__.from?.first_name as string,
        username : __context__.from?.username as string,
        isPremium: __context__.from?.is_premium || false,
        lang: __context__.from?.language_code || 'ru',
    });

    if (user) await __context__.reply(`
\`\`\`json
${object.stringify(user)}
\`\`\`
`, {
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'WebApp',
                        web_app: {
                            url: 'https://dapp.thodle.tech'
                        }
                    }
                ]
            ]
        }
    });
    else await __context__.reply('Привет')
});

export default commands;
