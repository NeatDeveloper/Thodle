import { factory } from 'helpers';
import mailing from './mailing';

const routes = factory.createApp().basePath('/admin');

routes.get('/', async __context__ => {
    return __context__.text('API сервиса Thodle')
});

routes.route('/', mailing);

export default routes;
