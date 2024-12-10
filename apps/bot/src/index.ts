import { webhookCallback } from 'grammy';
import bot from './bot';
import { getMode, getTelegram } from '@repo/utils/env';

const telegram = getTelegram();
const mode = getMode();

if (mode.MODE === 'PROD') {
    await bot.init();

    const handleUpdate = webhookCallback(bot, 'std/http', {
        secretToken: telegram.TELEGRAM_SECRET_KEY
    });

    Bun.serve({
        port: process.env.BOT_PORT,
        fetch: (req, server) => {
            const url = new URL(req.url);

            const XTelegramBotApiSecretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');

            if (
                req.method === 'POST' &&
                url.pathname == `/${telegram.TELEGRAM_ENDPOINT}` &&
                XTelegramBotApiSecretToken &&
                XTelegramBotApiSecretToken === telegram.TELEGRAM_SECRET_KEY
            ) try {
                return handleUpdate(req);
            } catch {
                return new Response("Обработка запросов Telegram!");;
            }
            return new Response("Обработка запросов Telegram!");
        },

    });

}

if (mode.MODE === 'DEV') {
    await bot.start();
}
