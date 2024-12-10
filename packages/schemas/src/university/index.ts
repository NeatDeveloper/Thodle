import { z } from '@hono/zod-openapi';

export const universitySchema = z.object({
    name: z.string(),
    shortName: z.string(),
    city: z.string()
});

export const universityObject = universitySchema.extend({
    updatedAt: z.string().date(),
    createdAt: z.string().date(),
})

export type UniversitySchema = z.infer<typeof universitySchema>;
export type UniversityObject = z.infer<typeof universityObject>;


export * from './studyTime';
export * from './week';
export * from './faculity';
