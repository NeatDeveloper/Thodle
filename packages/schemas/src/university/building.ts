import { z } from '@hono/zod-openapi';


export const buildingSchema = z.object({
    name: z.string(),
    shortName: z.string(),
    address: z.string(),
    university: z.string()
});

export const buildingObject = buildingSchema.extend({
    id: z.number()
});

export type BuildingSchema = z.infer<typeof buildingSchema>;
export type BuildingObject = z.infer<typeof buildingObject>;
