import { Bot } from 'grammy';
import commands from 'commands';
import routes from './routes';

const bot = new Bot(Bun.env.TELEGRAM_API_TOKEN);

commands(bot);

bot.use(routes);

export default bot;
