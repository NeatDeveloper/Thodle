import { z } from '@hono/zod-openapi';

export const studyTimeSchema = z.object({
    startTime: z.number(),
    durationLesson: z.number(),
    breakTime: z.number(),
    breakLessonTime: z.optional(z.number().nullable()),
    startBigBreakTime: z.number(),
    durationBigBreakTime: z.number(),
});

export const studyTimeObject = z.object({
    startTime: z.number(),
    durationLesson: z.number(),
    breakTime: z.number(),
    breakLessonTime: z.number().nullable(),
    startBigBreakTime: z.number(),
    durationBigBreakTime: z.number(),
});


export type StudyTimeSchema = z.infer<typeof studyTimeSchema>;
export type StudyTimeObject = z.infer<typeof studyTimeObject>;
