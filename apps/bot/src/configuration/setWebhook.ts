import { getApp, getTelegram } from "@repo/utils/env";
import botAPI from "src/api";

const
    app = getApp(),
    telegram = getTelegram();

try {
    const deleteRes = await botAPI.deleteWebhook({
        drop_pending_updates: true,
    });

    if(deleteRes) console.log('Webhook endpoint was deleted!');

    const setResult = await botAPI.setWebhook(`https://bot.${new URL(app.APP_HOST).hostname}/${telegram.TELEGRAM_ENDPOINT}`, {
        drop_pending_updates: true,
        ip_address: app.APP_IP,
        secret_token: telegram.TELEGRAM_SECRET_KEY,
        allowed_updates: ['message']
    });

    if(setResult) console.log('Webhook endpoint was setted!')
} catch(__error__) {
    console.error(__error__)
}
