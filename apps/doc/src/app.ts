import packageJSON from '../../../package.json' assert { type: 'json' };

import { OpenAPIHono } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';

const app = new OpenAPIHono();

const APP_NAME = `${Bun.env.APP_NAME} Documentation`;

app.doc('/openapi.json', {
    openapi: '3.0.0',
    info: {
        version: packageJSON.version,
        title: APP_NAME,
        license: {
            name: 'MIT',
        },
    },
});

app.get(
    '/',
    apiReference({
        pageTitle: APP_NAME,
        hideDownloadButton: true,
        spec: {
            url: '/openapi.json',
        },
        metaData: {
            title: APP_NAME,
            description: packageJSON.description,
            author: packageJSON.author,
        },
    })
);

export default app;
