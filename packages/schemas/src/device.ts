import { z } from '@hono/zod-openapi';

export const deviceSchema = z.object({
    user: z.string(),
    ip: z.optional(z.string()),
    device: z.string(),
    os: z.optional(z.string())
});

export const deviceRequest = z.object({
    user: z.string(),
    ip: z.optional(z.string()),
    device: z.string(),
    os: z.optional(z.string())
});

export type DeviceSchema = z.infer<typeof deviceSchema>;
export type DeviceRequest = z.infer<typeof deviceRequest>;
