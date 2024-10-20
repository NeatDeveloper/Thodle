import { factory } from 'helpers';

import v1 from './v1';

const routes = factory.createApp();

routes.route('/', v1);

export default routes;
