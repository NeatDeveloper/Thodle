import { Hono } from 'hono';

const app = new Hono();

app.get('/', async __context__ => {
    return __context__.text('Hello, world!');
});


export default {
    port: Bun.env.API_PORT,
    fetch: app.fetch
}
