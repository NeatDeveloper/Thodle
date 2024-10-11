declare global {
    type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
}

declare module "bun" {
    interface Env {
        TELEGRAM_API_TOKEN: string;
    }
}

export { };
