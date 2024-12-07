import { getCache } from '@repo/utils/env';
import type { QueueOptions } from 'bull';

const cache = getCache();

export default {
    redis: {
        password: cache.CACHE_PASSWORD,
        port: cache.CACHE_PORT,
        db: 0
    },
    limiter: {
        max: 25,
        duration: 1000
    }
} as QueueOptions
