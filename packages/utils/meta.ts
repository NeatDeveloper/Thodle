import type { Meta } from "./stores/core.svelte";

export default {
    apiURL: `https://api.${Bun.env.APP_HOST}/`,
    name: `${Bun.env.APP_NAME} | Admin panel`
} as Meta
