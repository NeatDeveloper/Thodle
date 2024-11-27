import { factory } from 'helpers';
import users from './users';
import admin from './admin';

const routes = factory.createApp().basePath('/');

routes.get('/', async __context__ => {
    return __context__.text('API сервиса Thodle')
});

routes.route('/', users);
routes.route('/', admin);

export default routes;
