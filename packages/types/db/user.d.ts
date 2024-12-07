import type { SettingsRequest } from '@repo/schemas';
import type { User as _User } from '@prisma/client'

declare global {
    namespace DB {
        namespace User {
            interface InApiContext extends _User {}
            interface MiniApp {
                settings: SettingsRequest
            }
        }
    }
}

export { };
