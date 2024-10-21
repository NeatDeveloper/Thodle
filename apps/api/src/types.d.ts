import '@repo/types/env';
import '@repo/types/api';

import type { HTTPException } from 'hono/http-exception';

declare global {
    namespace APP {
        interface Context {
            Variables: {};
        }

        type CreateException = <ReturnResponse extends boolean = false>(
            status: API.HTTPErrorCodes,
            options?: {
                response?: ReturnResponse;
                message?: string;
            }
        ) => ReturnResponse extends true ? Response : HTTPException;
    }
}

export {};
