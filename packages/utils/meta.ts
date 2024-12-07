import { getApp } from "./env";
import type { Meta } from "./stores/core.svelte";

const app = getApp();

const apiURL = new URL(app.APP_HOST);
apiURL.hostname = `api.${apiURL.hostname}`;
apiURL.protocol = 'https';

export default {
    apiURL: apiURL.toString(),
    name: `${app.APP_NAME} | Admin panel`
} as Meta
