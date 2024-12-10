import { z } from '@hono/zod-openapi';

export const optionsSchema = z.object({
    isBlocked: z.optional(z.boolean()),
    heSawWelcomeScreen: z.optional(z.boolean())
});

export const optionsObject = z.object({
    isBlocked: z.boolean(),
    heSawWelcomeScreen: z.boolean()
});


export type OptionsSchema = z.infer<typeof optionsSchema>;
export type OptionsObject = z.infer<typeof optionsObject>;
