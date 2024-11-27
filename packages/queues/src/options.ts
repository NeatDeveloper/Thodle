import type { QueueOptions } from 'bull';

export default {
    redis: {
        password: Bun.env.CACHE_PASSWORD,
        port: Bun.env.CACHE_PORT
    },
    limiter: {
        max: 25,
        duration: 1000
    }
} as QueueOptions
