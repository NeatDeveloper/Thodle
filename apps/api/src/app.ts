import { logger } from 'hono/logger';
import { trimTrailingSlash } from 'hono/trailing-slash';
import { cors } from 'hono/cors';
import { bodyLimit } from 'hono/body-limit';

import { CreateException, factory, isMyOrigin } from 'helpers';
import routes from './routes';
import { showRoutes } from 'hono/dev';
import { csrf } from 'hono/csrf';

import queuesInit from '@repo/queues';
import openapi from './openapi';
import { getMode } from '@repo/utils/env';

const mode = getMode();
const app = factory.createApp();

mode.MODE === 'DEV' && app.use(logger());

app.use(trimTrailingSlash());

app.use(csrf({ origin: isMyOrigin }));

app.use(
    cors({
        origin: (origin, __context__) =>
            isMyOrigin(origin) ? origin : undefined,
        credentials: true,
    })
);

app.use(
    bodyLimit({
        maxSize: 50 * 1024,
        onError: (__context__) =>
            CreateException('REQUEST_TOO_LONG', { response: true }),
    })
);

const queues = queuesInit();

app.use(async (__context__, next) => {
    __context__.set('queues', queues);

    await next();
})

app.route('/', routes);
app.route('/', openapi);


mode.MODE === 'DEV' && showRoutes(app);


export default app;
