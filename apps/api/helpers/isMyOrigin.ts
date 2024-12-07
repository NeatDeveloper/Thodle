import { getApp, getPorts } from '@repo/utils/env';

const
    ports = getPorts(),
    app = getApp();

export default (origin: string) =>
    new RegExp(
        `^(https?:\\/\\/)?(localhost:${ports.API_PORT}|([a-z0-9-]+\\.)?(${new URL(app.APP_HOST).hostname}))$`,
        'i'
    ).test(origin);
