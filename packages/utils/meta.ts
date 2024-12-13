import { getApp, getS3 } from "./env";
import type { Meta } from "./stores/core.svelte";

const app = getApp();
const s3 = getS3();

const apiURL = new URL(app.APP_HOST);

apiURL.hostname = `api.${apiURL.hostname}`;
apiURL.protocol = 'https';

export default {
    apiURL: apiURL.toString(),
    name: app.APP_NAME,
    s3: s3.S3_ENDPOINT
} as Meta
