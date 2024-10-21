import { OpenAPIHono } from '@hono/zod-openapi';

const app = new OpenAPIHono();

app.doc('/openapi.json', {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: `${Bun.env.APP_NAME} Documentation`,
        license: {
            name: 'MIT'
        }
    },
})

export default app;
