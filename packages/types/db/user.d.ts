import type { User as _User } from '@prisma/client';
import type {
    SettingsRequest,
    ProfileRequest,
    OptionsRequest
} from '@repo/schemas';

declare global {
    namespace DB {
        namespace User {
            interface InApiContext extends _User {}
            interface DTO extends _User {
                settings: SettingsRequest;
                profile: ProfileRequest;
                options: OptionsRequest;
            }
        }
    }
}

export { };
