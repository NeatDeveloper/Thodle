import { factory } from '../../helpers';

// Routes
import admin from './admin';
import student from './student';

const routes = factory.createApp().basePath('/');

routes.get('/', async __context__ => {
    return __context__.text('API сервиса Thodle')
});

routes.route('/', admin);
routes.route('/', student);

export default routes;
