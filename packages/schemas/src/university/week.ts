import { z } from '@hono/zod-openapi';
import { WeekOrder as _WeekOrder } from '@prisma/client'

export const weekOrder = z.nativeEnum(_WeekOrder);
export type WeekOrder = z.infer<typeof weekOrder>;

export const weekSchema = z.object({
    title: z.string(),
    order: weekOrder,
    university: z.number(),
});
export const weekObject = weekSchema.extend({
    id: z.number()
});

export type WeekSchema = z.infer<typeof weekSchema>;
export type WeekObject = z.infer<typeof weekObject>;
