import { z } from 'zod';

export const StudentScalarFieldEnumSchema = z.enum(['id','tgID','group','createdAt','updatedAt']);

export default StudentScalarFieldEnumSchema;
