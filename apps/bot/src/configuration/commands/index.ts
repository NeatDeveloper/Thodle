import { Bot } from 'grammy';
import commands from './commands.json';

import type { BotCommand } from 'grammy/types';


export default (bot: Bot) => {
    const localeCommands: Record<'ru' | 'en', BotCommand[]> = {
        en: [],
        ru: []
    };

    for(const command of commands) {
        localeCommands.ru.push({
            command: command.command,
            description: command.description.ru
        });
        localeCommands.en.push({
            command: command.command,
            description: command.description.en
        });
    }

    bot.api.setMyCommands(localeCommands.en, { language_code: 'en' })
    bot.api.setMyCommands(localeCommands.ru, { language_code: 'ru' })
}
