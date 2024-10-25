import { factory } from 'helpers';
import users from './users';

const routes = factory.createApp().basePath('/');

routes.get('/', async __context__ => {
    return __context__.json({ message: 'hello' })
});

routes.route('/', users);

export default routes;
