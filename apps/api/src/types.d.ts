import '@repo/types/env';
import type { HTTPException } from 'hono/http-exception';
import type { StatusCode } from 'hono/utils/http-status';

declare global {
    namespace APP {
        interface Context {
            Variables: {

            };
        }

        type Exception = (message?: string) => HTTPException;
    }
}

export {};
