import '@repo/types/env';
import '@repo/types/api';

import type { HTTPException } from 'hono/http-exception';
import type { Queue } from 'bull';
import type { QueuesName } from '@repo/queues';

declare global {
    namespace APP {
        interface Context {
            Variables: {
                queues: Record<QueuesName, Queue<any>>;
            };
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
