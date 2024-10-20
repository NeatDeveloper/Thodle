import { logger } from 'hono/logger';
import { trimTrailingSlash } from 'hono/trailing-slash';
import { cors } from 'hono/cors';
import { bodyLimit } from 'hono/body-limit';

import { factory, isMyOrigin } from './helpers';
import routes from './routes';

const app = factory.createApp();


app.use(logger());

app.use(trimTrailingSlash());

app.use(cors({
    origin: (origin, __context__) => isMyOrigin(origin) ? origin : undefined,
    credentials: true
}));

app.use(bodyLimit({
    maxSize: 50 * 1024,
    onError: __context__ => __context__.json({ message: 'Large package size' }, 413)
}));



app.route('/', routes);

export default app;
