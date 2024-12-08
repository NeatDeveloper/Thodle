import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { settingsRequest, settingsSchema } from "@repo/schemas";
import { apiReference } from '@scalar/hono-api-reference';
import { getApp } from "@repo/utils/env";


const app = getApp();

const APP_NAME = `${app.APP_NAME} Documentation`;

const opanapi = new OpenAPIHono();


// const settingsRoute = createRoute({
//     method: 'patch',
//     path: '/student/settings',
//     request: {
//         body: {
//             content: {
//                 "application/json": {
//                     schema: settingsSchema
//                 }
//             }
//         }
//     },
//     responses: {
//         200: {
//             schema: settingsRequest,
//             description: 'Description'
//         }
//     }
// });

// const meRoute = createRoute({
//     method: 'patch',
//     path: '/student/me',
//     request: {
//         body: {
//             content: {
//                 "application/json": {
//                     schema: {
//                         initData: z.string()
//                     }
//                 }
//             }
//         }
//     },
//     responses: {
//         200: {
//             content: {
//                 'application/json': {
//                     schema: z.object({
//                         lastName: z.string()
//                     })
//                 }
//             },
//             description: 'Description'
//         }
//     }
// })

// opanapi.openapi(settingsRoute, (c) => {
//     return c.json({
//     })
// })
// opanapi.openapi(meRoute, (c) => {
//     return c.json({
//         lastName: 'LastName'
//     })
// })


opanapi.doc(`/openapi.json`, {
    openapi: '3.0.0',
    info: {
        version: "1.0.0",
        title: APP_NAME,
        license: {
            name: 'MIT',
        },
    },
});

opanapi.get('/doc', apiReference({
    pageTitle: APP_NAME,
    hideDownloadButton: true,
    spec: {
        url: '/openapi.json',
    },
    metaData: {
        title: APP_NAME,
        author: '<Envelope Team />',
    },
}))


export default opanapi;
