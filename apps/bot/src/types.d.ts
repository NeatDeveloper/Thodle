import '@repo/types/env';
import type { ContextDeclaration } from 'context/declaration';

declare global {
    namespace APP {
        type Context = ContextDeclaration.Base;
    }
}

export {};
