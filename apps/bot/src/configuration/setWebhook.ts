import botAPI from "src/api";

try {
    const deleteRes = await botAPI.deleteWebhook({
        drop_pending_updates: true,
    });

    if(deleteRes) console.log('Webhook endpoint was deleted!');

    const setResult = await botAPI.setWebhook(`https://bot.${Bun.env.APP_HOST}/${Bun.env.TELEGRAM_ENDPOINT}`, {
        drop_pending_updates: true,
        ip_address: Bun.env.APP_IP,
        secret_token: Bun.env.TELEGRAM_SECRET_KEY,
        allowed_updates: ['message']
    });

    if(setResult) console.log('Webhook endpoint was setted!')
} catch(__error__) {
    console.error(__error__)
}
