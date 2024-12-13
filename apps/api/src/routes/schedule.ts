import prisma from '@repo/db';
import { factory } from 'helpers';

const schedule = factory.createApp().basePath('/schedule');

schedule.get('/', async __context__ => {
    return __context__.text('Schedule')
});

export default schedule;
