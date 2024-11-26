import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.command('schedule', async (__context__) => {
    await __context__.reply('Hello');
});

export default commands;
