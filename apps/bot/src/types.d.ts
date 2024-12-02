import '@repo/types/env';
import '@repo/types/schedule';

import type { ContextDeclaration } from 'context/declaration';

declare global {
    namespace APP {
        type Context = ContextDeclaration.Base;
    }
}

export {};
