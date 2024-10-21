import { z } from 'zod';

export const UserRoleSchema = z.enum(['REGULAR','ADMIN']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export default UserRoleSchema;
