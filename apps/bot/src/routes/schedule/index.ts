import { Composer } from 'grammy';

const route = new Composer();

route.command('start', async __context__ => {
    await __context__.reply('hi')
});

export default route;
