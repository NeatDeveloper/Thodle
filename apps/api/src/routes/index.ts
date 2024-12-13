import prisma from '@repo/db';
import { factory } from 'helpers';

// Routes
import admin from './admin';
import student from './student';
import schedule from './schedule';

const routes = factory.createApp().basePath('/');

routes.get('/', async __context__ => {
    const usersCount = await prisma.user.count();
    return __context__.text('API сервиса Thodle. Количество пользователей: ' + usersCount);
});

routes.route('/', schedule);
routes.route('/', student);
routes.route('/', admin);

export default routes;
