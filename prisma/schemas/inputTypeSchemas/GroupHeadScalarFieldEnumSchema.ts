import { z } from 'zod';

export const GroupHeadScalarFieldEnumSchema = z.enum(['id','tgID','group','level','createdAt','updatedAt']);

export default GroupHeadScalarFieldEnumSchema;
