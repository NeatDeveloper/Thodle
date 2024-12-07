import type { Curator, GroupHead, Lector, MailingSettings, MiniappSettings, Options, Profile, ScheduleSettings, Student, ThemeSettings, Tutor, User, UserRole, Settings as _Settings } from '@prisma/client';
import type { Serialize } from '@repo/utils/object'

declare global {
    namespace DB {
        namespace User {
            interface InContext extends User {}
            interface MiniApp extends User {
                amplua: {
                    role: UserRole[];
                    curator: DB.OmitAnotherFields<Serialize<Curator>> | null;
                    groupHead: DB.OmitAnotherFields<Serialize<GroupHead>> | null;
                    lector: DB.OmitAnotherFields<Serialize<Lector>> | null;
                    student: DB.OmitAnotherFields<Serialize<Student>> | null;
                    tutor: DB.OmitAnotherFields<Serialize<Tutor>> | null;
                };
                profile: DB.OmitAnotherFields<Serialize<Profile>>;
                settings: Settings;
                options: Omit<Options, 'id' | 'updatedAt'>;
            }

            type Settings = DB.OmitAnotherFields<_Settings> & {
                mailing: Omit<MailingSettings, 'id'>;
                schedule: Omit<ScheduleSettings, 'id'>;
                miniapp: Omit<MiniappSettings, 'id'>;
            }
        }
    }
}

export { };
