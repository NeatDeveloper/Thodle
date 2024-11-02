import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.command('start', async (__context__) => {
    // console.log(__context__.from);
    await __context__.reply(
        `Расписание на 09.10:

1. 👨‍🏫 История России, 701(эконом)
2. 👨‍💻 Информатика, 310(глав)
3. 👨‍🏫 Языки программирования, 315(глав)
4. 👨‍🏫 Информатика, 310(глав)`,
        {
            message_effect_id: ''
        }
    );
});

export default commands;
