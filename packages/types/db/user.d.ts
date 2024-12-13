import type {
    OptionsObject,
    ProfileObject,
    SettingsObject,
    UserObject
} from '@repo/schemas';

declare global {
    namespace DB {
        namespace User {
            interface InApiContext extends UserObject {}
            interface DTO extends UserObject {
                settings: SettingsObject;
                profile: ProfileObject;
                options: OptionsObject;
            }

            type Profile = ProfileObject;
        }
    }
}

export { };
