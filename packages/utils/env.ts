import { z } from 'zod';


const ENV_SCHEMA = z.object({
    MODE: z.enum(['PROD', 'DEV']),

    // APP options
    APP_NAME: z.string(),
    APP_IP: z.string().ip(),
    APP_HOST: z.string().url(),

    // App ports
    API_PORT: z.coerce.number(),
    DAPP_PORT: z.coerce.number(),
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
    DAPP_PORT: true,
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
    MODE: true
})


export const getTelegram = () => TELEGRAM.parse(Bun.env);
export const getPorts = () => PORTS.parse(Bun.env);
export const getApp = () => APP.parse(Bun.env);
export const getDatabase = () => DATABASE.parse(Bun.env);
export const getCache = () => CACHE.parse(Bun.env);
export const getMode = () => MODE.parse(Bun.env).MODE;
