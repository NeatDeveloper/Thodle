import app from './app';
import { getPorts } from '@repo/utils/env';

const ports = getPorts();

console.log(
    `The API service is deployed on http://localhost:${ports.API_PORT}`
);


export default {
    port: ports.API_PORT,
    fetch: app.fetch,
};
