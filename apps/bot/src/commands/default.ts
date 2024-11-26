import { Composer } from 'grammy';
import Queue from 'bull';
import botAPI from 'src/api';

const messageQueue = new Queue('message', {
    redis: {
        port: Bun.env.CACHE_PORT,
        password: Bun.env.CACHE_PASSWORD,
        db: 1
    },
    limiter: {
        max: 25,
        duration: 1000,
    },
    defaultJobOptions: {

    }
})

const commands = new Composer<APP.Context>();

commands.command('start', async (__context__) => {
    await __context__.reply('Hello');
});

commands.command('send', async (ctx) => {
    const message = ctx.message?.text.split(' ').slice(1).join(' ');
    if (!message) {
        return ctx.reply('Пожалуйста, укажите сообщение для рассылки.');
    }

    for(let i = 0; i < 50; i++) {
        messageQueue.add({ userId: ctx.from?.id, message });
    }

    ctx.reply('Ваше сообщение добавлено в очередь для рассылки всем пользователям.');
});

messageQueue.process(async (job) => {
    const { userId, message } = job.data;

    try {
        await botAPI.sendMessage(userId, message);
        console.log(`Сообщение отправлено пользователю ${userId}`);
    } catch (error) {
        console.error(`Не удалось отправить сообщение пользователю ${userId}:`, error);
        // Вы можете добавить логику для повторных попыток или игнорирования ошибок
    }
})

export default commands;
