import { Bot } from 'grammy';

export default async (bot: Bot<APP.Context>) => {
    await bot.api.setMyCommands([
        {
            command: "start",
            description: "Startup service"
        },
        {
            command: "schedule",
            description: "Take schedules"
        },
        {
            command: "help",
            description: "Help"
        }
    ], { language_code: 'en' });

    await bot.api.setMyCommands([
        {
            command: "start",
            description: "Запуск сервиса"
        },
        {
            command: "schedule",
            description: "Получить расписание"
        },
        {
            command: "help",
            description: "Помощь"
        }
    ], { language_code: 'ru' });
}
