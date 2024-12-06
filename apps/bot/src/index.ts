import { webhookCallback } from 'grammy';
import bot from './bot';

await bot.init();

const handleUpdate = webhookCallback(bot, 'std/http', {
    secretToken: Bun.env.TELEGRAM_SECRET_KEY
});

Bun.serve({
    port: process.env.BOT_PORT,
    fetch: (req, server) => {
        const url = new URL(req.url);

        const XTelegramBotApiSecretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');

        if (
            req.method === 'POST' &&
            url.pathname == `/${process.env.TELEGRAM_ENDPOINT}` &&
            XTelegramBotApiSecretToken &&
            XTelegramBotApiSecretToken === process.env.TELEGRAM_SECRET_KEY
        ) try {
            return handleUpdate(req);
        } catch {
            return new Response("Обработка запросов Telegram!");;
        }
        return new Response("Обработка запросов Telegram!");
    },

});
