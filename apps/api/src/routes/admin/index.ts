import { factory } from 'helpers';
import mailing from './mailing';
import student from './student';
import university from './university';

const routes = factory.createApp().basePath('/admin');

routes.get('/', async __context__ => {
    return __context__.text('API сервиса Thodle')
});

routes.route('/', mailing);
routes.route('/', university);
routes.route('/', student);

export default routes;
