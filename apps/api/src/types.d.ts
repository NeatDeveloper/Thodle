import '@repo/types/env';
import type { HTTPException } from 'hono/http-exception';
import type { ClientErrorStatusCode, ServerErrorStatusCode } from 'hono/utils/http-status';
import type { StatusCodes } from 'http-status-codes';

declare global {
    namespace APP {
        interface Context {
            Variables: {

            };
        }

        type CreateException = (
            status: {
                [NAME in keyof typeof StatusCodes]: typeof StatusCodes[NAME] extends ClientErrorStatusCode | ServerErrorStatusCode ? NAME : never;
            }[keyof typeof StatusCodes],
            message?: string
        ) => HTTPException;
    }
}

export {};
