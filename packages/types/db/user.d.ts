import type { User } from '@prisma/client';

declare global {
    namespace DB {
        namespace User {
            interface InContext extends User {}
        }
    }
}

export { };
