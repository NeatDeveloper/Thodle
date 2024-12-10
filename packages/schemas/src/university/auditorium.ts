import { z } from '@hono/zod-openapi';
import { WeekOrder as _WeekOrder } from '@prisma/client'

export const auditoriumSchema = z.object({
    building: z.number(),
    number: z.string()
});
export const auditoriumObject = auditoriumSchema.extend({
    id: z.number()
});

export type AuditoriumSchema = z.infer<typeof auditoriumSchema>;
export type AuditoriumObject = z.infer<typeof auditoriumObject>;
