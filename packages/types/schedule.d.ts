// import type { LessonType, SubGroupOrder, WeekCount } from "@prisma/client";
import type { SubGroupOrder } from '@prisma/client';
import type {
    WeekOrder,
    StudyTimeObject
} from '@repo/schemas';

declare global {
    namespace Schedule {
        interface _Base<T> {
            week: WeekOrder;
            day: number;
            lessons: T[];
        }
        interface Group extends _Base<GroupLesson> { }
        interface Lector extends _Base<LectorLesson> { }
        interface Auditorium extends _Base<AuditoriumLesson> { }


        type GroupLesson = _GroupScheduleBaseForAllGroups | _GroupScheduleBaseNotForAllGroups;

        interface LectorLesson extends _LectorScheduleBase {
            order: number;
        }
        interface AuditoriumLesson extends _AuditoriumScheduleBase {
            order: number;
        }

        // Default schemas
        interface _GroupScheduleBase {
            type: LessonType;
            discipline: string;
            disciplineShortName?: string;
            auditorium?: string;
            lector?: string;
        }
        interface _LectorScheduleBase {
            type: LessonType;
            groupName: string;
            auditorium?: string;
            discipline: string;
        }

        interface _AuditoriumScheduleBase {
            type: LessonType;
            groupName: string;
            lector: string;
            discipline: string;
        }

        interface _GroupScheduleBaseForAllGroups extends _GroupScheduleBase {
            forAllGroups: true;
            order: number;
        }

        interface _GroupScheduleBaseNotForAllGroups {
            forAllGroups: false;
            order: number;
            lessons: (_GroupScheduleBase & {
                group: SubGroupOrder;
            })[];
        }
    }
}

export { };
