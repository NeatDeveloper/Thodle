declare module "bun" {
    interface Env {
        // APP options
        APP_NAME: string;
        APP_HOST: string;

        // App ports
        API_PORT : number;
        DAPP_PORT: number;
        BOT_PORT : number;
        SITE_PORT: number;

        // Telegram API options
        TELEGRAM_API_TOKEN    : string;
        TELEGRAM_ENDPOINT_PATH: string;
        TELEGRAM_ENDPOINT_KEY : string;

        // JWT options
        JWT_ACCESS_KEY     : string;
        JWT_ACCESS_EXPIRES : string;
        JWT_REFRESH_KEY    : string;
        JWT_REFRESH_EXPIRES: string;

        ADMIN__JWT_ACCESS_KEY     : string;
        ADMIN__JWT_ACCESS_EXPIRES : string;
        ADMIN__JWT_REFRESH_KEY    : string;
        ADMIN__JWT_REFRESH_EXPIRES: string;

        // Database options
        DATABASE_USER    : string;
        DATABASE_PASSWORD: string;
        DATABASE_HOST    : string;
        DATABASE_PORT    : number;
        DATABASE_NAME    : string;
        DATABASE_SCHEMA  : string;

        DATABASE_URL: string;
    }
}

export { };
