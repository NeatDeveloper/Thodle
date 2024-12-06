import type { LessonType, SubGroupOrder, WeekCount } from "@prisma/client";

declare global {
    namespace Schedule {
        interface Day {
            week: WeekCount;
            weekName: string;
            dayOrder: number;
            lessons: Lesson[];
        }

        interface LessonBase {
            type: LessonType;
            name: string;
            shortName: string;
            time: string;
            point: string;
            lector: string;
        }

        interface LessonForAllGroups extends LessonBase {
            forAllGroups: true;
            order: number;
        }

        interface LessonNotForAllGroups {
            forAllGroups: false;
            order: number;
            lessons: (LessonBase & {
                group: SubGroupOrder;
            })[];
        }

        type Lesson = LessonForAllGroups | LessonNotForAllGroups;
    }
}

// Redis key name
// {Group[GroupID]|Lector[LectorID]}:{Week}:{Day}

// const monday: Schedule.Day = {
//     week: 'FIRST',
//     weekName: 'Красная неделя',
//     dayOrder: 0,
//     lessons: [
//         {
//             forAllGroups: false,
//             order: 1,
//             lessons: [
//                 {

//                 }
//             ]
//         },
//         {
//             forAllGroups: true,

//         }
//     ]
// }

export { };
