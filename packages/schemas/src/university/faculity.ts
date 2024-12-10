import { z } from '@hono/zod-openapi';
import { WeekOrder as _WeekOrder } from '@prisma/client'

export const faculitySchema = z.object({
    name: z.string(),
    shortName: z.string(),
    university: z.number(),
});
export const faculityObject = faculitySchema.extend({
    id: z.number()
});

export type FaculitySchema = z.infer<typeof faculitySchema>;
export type FaculityObject = z.infer<typeof faculityObject>;
