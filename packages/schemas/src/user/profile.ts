import { z } from '@hono/zod-openapi';

export const profileSchema = z.object({
    avatar: z.optional(z.string()),
    tgID: z.bigint(),
    lastName: z.optional(z.string()),
    firstName: z.optional(z.string()),
    username: z.optional(z.string()),
    avatarUpdatedAt: z.optional(z.date()),
    lang: z.string(),
    isPremium: z.optional(z.boolean()).default(false),
    updatedAt: z.optional(z.date()),
    createdAt: z.optional(z.date()),
});

export const profileObject = z.object({
    avatar: z.string().nullable(),
    tgID: z.bigint(),
    lastName: z.string().nullable(),
    firstName: z.string().nullable(),
    username: z.string().nullable(),
    avatarUpdatedAt: z.date().nullable(),
    lang: z.string(),
    isPremium: z.boolean().default(false),
    updatedAt: z.date(),
    createdAt: z.date(),
});

export const fullProfileObject = profileObject.extend({
    id: z.string(),
    updatedAt: z.date(),
    createdAt: z.date(),
})


export type ProfileSchema = z.infer<typeof profileSchema>;
export type ProfileObject = z.infer<typeof profileObject>;
export type FullProfileObject = z.infer<typeof fullProfileObject>;
