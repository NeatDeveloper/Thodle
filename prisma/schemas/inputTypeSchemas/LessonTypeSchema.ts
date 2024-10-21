import { z } from 'zod';

export const LessonTypeSchema = z.enum(['LECTURE','PRACTICE']);

export type LessonTypeType = `${z.infer<typeof LessonTypeSchema>}`

export default LessonTypeSchema;
