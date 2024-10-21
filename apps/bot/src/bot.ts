import { Bot } from 'grammy';
import Context from './context';

import { setMyCommands } from './configuration';
import commands from 'commands';

const bot = new Bot<APP.Context>(Bun.env.TELEGRAM_API_TOKEN, {
    ContextConstructor: Context,
});

await setMyCommands(bot);

bot.use(commands);

export default bot;
