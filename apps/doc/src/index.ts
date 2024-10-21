import app from './app';

console.log(
    `The Documentation service is deployed on http://localhost:${Bun.env.DOC_PORT}`
);

export default {
    port: Bun.env.DOC_PORT,
    fetch: app.fetch,
};
