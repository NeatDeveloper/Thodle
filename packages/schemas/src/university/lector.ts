import { z } from '@hono/zod-openapi';


export const lectorSchema = z.object({
    lastName: z.string(),
    firstName: z.string(),
    surname: z.string(),

});

export const lectorObject = lectorSchema.extend({
    id: z.number()
});

export type BuildingSchema = z.infer<typeof lectorSchema>;
export type BuildingObject = z.infer<typeof lectorObject>;
