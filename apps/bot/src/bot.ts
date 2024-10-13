import { Bot } from 'grammy';
import { setMyCommands } from './configuration';
import routes from './commands';

const bot = new Bot(Bun.env.TELEGRAM_API_TOKEN);

setMyCommands(bot);

bot.use(routes);

export default bot;
