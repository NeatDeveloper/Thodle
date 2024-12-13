import { z } from '@hono/zod-openapi';

export const universitySchema = z.object({
    name: z.string().min(4),
    shortName: z.string().min(2),
    city: z.string().min(3),
    file: z.instanceof(File).refine(file => [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/svg+xml",
        "image/gif"
    ].includes(file.type))
});

export const universityObject = universitySchema.extend({
    id: z.string(),
    name: z.string(),
    shortName: z.string(),
    city: z.string(),
    iconURL: z.string().nullable(),
    updatedAt: z.string().date(),
    createdAt: z.string().date(),
})

export type UniversitySchema = z.infer<typeof universitySchema>;
export type UniversityObject = z.infer<typeof universityObject>;


export * from './studyTime';
export * from './week';
export * from './faculity';
export * from './building';
export * from './auditorium';
