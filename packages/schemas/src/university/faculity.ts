import { z } from '@hono/zod-openapi';

export const faculitySchema = z.object({
    name: z.string(),
    shortName: z.string(),
    university: z.string(),
});
export const faculityObject = faculitySchema.extend({
    id: z.number()
});

export type FaculitySchema = z.infer<typeof faculitySchema>;
export type FaculityObject = z.infer<typeof faculityObject>;
