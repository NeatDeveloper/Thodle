import { default as default_route } from './default';

import { Composer } from 'grammy';

const routes = new Composer();

routes.use(default_route);

export default routes;
