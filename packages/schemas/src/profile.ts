import { z } from '@hono/zod-openapi';

export const profileSchema = z.object({
    avatar: z.optional(z.string()),
    tgID: z.bigint(),
    lastName: z.optional(z.string()),
    firstName: z.optional(z.string()),
    username: z.optional(z.string()),
    lang: z.string(),
    isPremium: z.optional(z.boolean()).default(false),
});

export const profileRequest = z.object({
    avatar: z.string().nullable(),
    tgID: z.bigint(),
    lastName: z.string(),
    firstName: z.string(),
    username: z.string(),
    lang: z.string(),
    isPremium: z.boolean().default(false),
});


export type ProfileSchema = z.infer<typeof profileSchema>;
export type ProfileRequest = z.infer<typeof profileRequest>;
