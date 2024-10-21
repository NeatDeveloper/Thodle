import { z } from 'zod';

export const GroupScalarFieldEnumSchema = z.enum(['id','groupYear','faculity','createdAt','updatedAt']);

export default GroupScalarFieldEnumSchema;
