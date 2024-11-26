declare module 'bun' {
    interface Env {
        // Options
        MODE: 'DEV' | 'PROD';

        // APP options
        APP_NAME: string;
        APP_IP: string;
        APP_HOST: string;

        // App ports
        API_PORT: number;
        DOC_PORT: number;
        DAPP_PORT: number;
        BOT_PORT: number;
        SITE_PORT: number;
        ADMIN_PORT: number;

        // Telegram API options
        TELEGRAM_API_TOKEN: string;
        TELEGRAM_SECRET_KEY: string;
        TELEGRAM_ENDPOINT: string;

        // JWT options
        JWT_ACCESS_KEY: string;
        JWT_ACCESS_EXPIRES: string;
        JWT_REFRESH_KEY: string;
        JWT_REFRESH_EXPIRES: string;

        ADMIN__JWT_ACCESS_KEY: string;
        ADMIN__JWT_ACCESS_EXPIRES: string;
        ADMIN__JWT_REFRESH_KEY: string;
        ADMIN__JWT_REFRESH_EXPIRES: string;

        // Database options
        DATABASE_USER: string;
        DATABASE_PASSWORD: string;
        DATABASE_HOST: string;
        DATABASE_PORT: number;
        DATABASE_NAME: string;
        DATABASE_SCHEMA: string;

        DATABASE_URL: string;

        // Cacahe options
        CACHE_NAME: string;
        CACHE_USER: string;
        CACHE_PASSWORD: string;
        CACHE_PORT: number
    }
}

export {};
