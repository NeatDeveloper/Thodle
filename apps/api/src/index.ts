import { Hono } from 'hono';

const server = new Hono();

server.get('/', async __context__ => {
    return __context__.text('Hello, world!');
});


export default {
    port: 3000,
    fetch: server.fetch
}
