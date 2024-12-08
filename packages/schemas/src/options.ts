import { z } from '@hono/zod-openapi';

export const optionsSchema = z.object({
    isBlocked: z.optional(z.boolean()),
    heSawWelcomeScreen: z.optional(z.boolean())
});

export const optionsRequest = z.object({
    isBlocked: z.boolean(),
    heSawWelcomeScreen: z.boolean()
});


export type OptionsSchema = z.infer<typeof optionsSchema>;
export type OptionsRequest = z.infer<typeof optionsRequest>;
