import { Bot } from 'grammy';

import { setMyCommands } from './configuration';
import commands from 'commands';
import { getTelegram } from '@repo/utils/env';

const telegram = getTelegram();

const bot = new Bot<APP.Context>(telegram.TELEGRAM_API_TOKEN);

await setMyCommands(bot);

bot.use(commands);

export default bot;
