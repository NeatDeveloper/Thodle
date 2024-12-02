import { Composer } from 'grammy';
import User from '@repo/db/user';
import object from '@repo/utils/object';

const commands = new Composer<APP.Context>();

commands.command('start', async (__context__) => {

    let user = await User.findUnique(__context__.from?.id || 0);
    if(!user) user = await User.create({
        profile: {
            create: {
                tgID: __context__.from?.id as number,
                lastName: __context__.from?.last_name as string,
                firstName: __context__.from?.first_name as string,
                username: __context__.from?.username as string,
                isPremium: __context__.from?.is_premium || false,
                lang: __context__.from?.language_code || 'ru',
            }
        },
        amplua: {
            create: {}
        },
        role: 'R_0',
        settings: {
            create: {
                mailing: {
                    create: {}
                },
                schedule: {
                    create: {}
                }
            }
        }
    })
    if(user) await __context__.reply(
`
\`\`\`json
${object.stringify(user)}
\`\`\`
`, {
    parse_mode: 'MarkdownV2'
});
else await __context__.reply('Привет')
});

export default commands;
