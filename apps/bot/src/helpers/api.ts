import { getApp, getMode, getPorts } from "@repo/utils/env";
import { api } from '@repo/utils/other';

const mode = getMode();
const app = getApp();
const ports = getPorts();

export default () => {
    if(mode.MODE === 'DEV') return api({
        prefixUrl: `https://api.${new URL(app.APP_HOST).hostname}`,
        credentials: 'include',
        fetch,
    });

    else return api({
        prefixUrl: `http://localhost:${ports.API_PORT}`,
        credentials: 'include',
        fetch,
    });
}
