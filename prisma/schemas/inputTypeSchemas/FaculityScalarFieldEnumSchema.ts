import { z } from 'zod';

export const FaculityScalarFieldEnumSchema = z.enum(['id','university','createdAt','updatedAt']);

export default FaculityScalarFieldEnumSchema;
