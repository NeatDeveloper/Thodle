import { Composer } from 'grammy';

const commands = new Composer<APP.Context>();

commands.command('start', async __context__ => {
    console.log(__context__)
    await __context__.reply('Hello, world!');
});

export default commands;
