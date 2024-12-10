import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.command('schedule', async (__context__) => {
    await __context__.reply("Расписание на понедельник: \n 1. Алгебра и геометрия \n 2.Физика \n 3. ОРГ \n 4. Физ-ра", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Пн",
                        callback_data: "pn"
                    },
                    {
                        text: "Вт",
                        callback_data: "vt"
                    },
                    {
                        text: "Ср",
                        callback_data: "sr"
                    },
                    {
                        text: "Чт",
                        callback_data: "cht"
                    },
                    {
                        text: "Пт",
                        callback_data: "pt"
                    },


                ]

            ]
        }
    })
});

export default commands;
