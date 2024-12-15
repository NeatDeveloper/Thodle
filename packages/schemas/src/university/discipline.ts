import { z } from '@hono/zod-openapi';


export const disciplineSchema = z.object({
    name: z.string(),
    shortName: z.string(),
    university: z.string()
});

export const disciplineObject = disciplineSchema.extend({
    id: z.number()
});

export type DisciplineSchema = z.infer<typeof disciplineSchema>;
export type DisciplineObject = z.infer<typeof disciplineObject>;
