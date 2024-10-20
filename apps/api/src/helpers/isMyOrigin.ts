export default (origin: string) => new RegExp(
    `^(https?:\\/\\/)?(localhost:${Bun.env.API_PORT}|([a-z0-9-]+\\.)?(${Bun.env.APP_HOST}))$`,
    'i'
).test(origin);
