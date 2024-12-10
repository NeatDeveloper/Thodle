import { z } from '@hono/zod-openapi';

export const deviceSchema = z.object({
    user: z.string(),
    ip: z.optional(z.string()),
    device: z.string(),
    os: z.optional(z.string())
});

export const deviceObject = z.object({
    user: z.string(),
    ip: z.optional(z.string()),
    device: z.string(),
    os: z.optional(z.string())
});

export type DeviceSchema = z.infer<typeof deviceSchema>;
export type DeviceObject = z.infer<typeof deviceObject>;
