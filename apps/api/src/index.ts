import app from './app';

console.log(`The API service is deployed on http://localhost:${Bun.env.API_PORT}`);

export default {
    port: Bun.env.API_PORT,
    fetch: app.fetch
}
