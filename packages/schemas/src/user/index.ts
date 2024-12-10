import { z } from 'zod';
import { UserRole as _UserRole } from '@prisma/client'

export const userRole = z.nativeEnum(_UserRole);

export type UserRole = z.infer<typeof userRole>;

export const userObject = z.object({
    id: z.string(),
    role: userRole,
    updatedAt: z.string().date(),
    createdAt: z.string().date()
});


export type UserObject = z.infer<typeof userObject>;
export * from './settings';
export * from './device';
export * from './options';
export * from './profile';
