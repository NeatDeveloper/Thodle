import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.command('start', async __context__ => {
    // console.log(__context__.from);
    await __context__.reply(`Расписание на 09.10:

1. 👨‍🏫 История России, 701(эконом)
2. 👨‍💻 Информатика, 310(глав)
3. 👨‍🏫 Языки программирования, 315(глав)
4. 👨‍🏫 Информатика, 310(глав)`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Пн',
                        callback_data: 's'
                    },
                    {
                        text: 'Вт',
                        callback_data: 's'
                    },
                    {
                        text: 'Ср',
                        callback_data: 's'
                    },
                    {
                        text: 'Чт',
                        callback_data: 's'
                    },
                    {
                        text: 'Пт',
                        callback_data: 's'
                    },
                    {
                        text: 'Сб',
                        callback_data: 's'
                    },
                ]
            ]
        }
    });
});

export default commands;
