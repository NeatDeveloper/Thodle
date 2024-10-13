import { Composer } from 'grammy';

const commands = new Composer();

commands.command('start', async __context__ => {
    await __context__.reply('hi')
});

export default commands;
