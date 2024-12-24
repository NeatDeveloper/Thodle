import { z } from 'zod';


const ENV_SCHEMA = z.object({
    MODE: z.enum(['PROD', 'DEV']),
    EDITION: z.enum(['DEV', 'BETA', 'PROD']),

    // APP options
    APP_NAME: z.string(),
    APP_IP: z.string().ip(),
    APP_HOST: z.string().url(),

    S3_ENDPOINT: z.string().url(),
    S3_VIRTUAL_ENDPOINT: z.string().url(),
    S3_API_ENDPOINT: z.string().url(),
    S3_ACCESS_KEY: z.string(),
    S3_SECRET_ACCESS_KEY: z.string(),
    S3_BACKET_NAME: z.string(),

    // App ports
    API_PORT: z.coerce.number(),
    MINIAPP_PORT: z.coerce.number(),
    BOT_PORT: z.coerce.number(),
    SITE_PORT: z.coerce.number(),
    ADMIN_PORT: z.coerce.number(),

    // Telegram API options
    TELEGRAM_API_TOKEN: z.string(),
    TELEGRAM_SECRET_KEY: z.string(),
    TELEGRAM_ENDPOINT: z.string(),

    // JWT options
    JWT_ACCESS_KEY: z.string(),
    JWT_ACCESS_EXPIRES: z.string(),
    JWT_REFRESH_KEY: z.string(),
    JWT_REFRESH_EXPIRES: z.string(),

    // Database options
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.coerce.number(),
    DATABASE_NAME: z.string(),
    DATABASE_SCHEMA: z.string(),

    DATABASE_URL: z.string(),

    // Cacahe options
    CACHE_NAME: z.string(),
    CACHE_USER: z.string(),
    CACHE_PASSWORD: z.string(),
    CACHE_PORT: z.coerce.number(),
});

const DATABASE = ENV_SCHEMA.pick({
    DATABASE_HOST: true,
    DATABASE_NAME: true,
    DATABASE_PASSWORD: true,
    DATABASE_PORT: true,
    DATABASE_SCHEMA: true,
    DATABASE_URL: true,
    DATABASE_USER: true
});

const PORTS = ENV_SCHEMA.pick({
    API_PORT: true,
    MINIAPP_PORT: true,
    BOT_PORT: true,
    SITE_PORT: true,
    ADMIN_PORT: true
});

const APP = ENV_SCHEMA.pick({
    APP_HOST: true,
    APP_IP: true,
    APP_NAME: true
});

const CACHE = ENV_SCHEMA.pick({
    CACHE_NAME: true,
    CACHE_PASSWORD: true,
    CACHE_PORT: true,
    CACHE_USER: true
});

const TELEGRAM = ENV_SCHEMA.pick({
    TELEGRAM_API_TOKEN: true,
    TELEGRAM_ENDPOINT: true,
    TELEGRAM_SECRET_KEY: true
});

const MODE = ENV_SCHEMA.pick({
    MODE: true,
    EDITION: true
})

const S3 = ENV_SCHEMA.pick({
    S3_ENDPOINT: true,
    S3_VIRTUAL_ENDPOINT: true,
    S3_API_ENDPOINT: true,
    S3_ACCESS_KEY: true,
    S3_SECRET_ACCESS_KEY: true,
    S3_BACKET_NAME: true,
});


export const getTelegram = () => TELEGRAM.parse(Bun.env);
export const getPorts = () => PORTS.parse(Bun.env);
export const getApp = () => APP.parse(Bun.env);
export const getDatabase = () => DATABASE.parse(Bun.env);
export const getCache = () => CACHE.parse(Bun.env);
export const getMode = () => MODE.parse(Bun.env);
export const getS3 = () => S3.parse(Bun.env);
