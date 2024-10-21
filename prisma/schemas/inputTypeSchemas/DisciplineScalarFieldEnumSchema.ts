import { z } from 'zod';

export const DisciplineScalarFieldEnumSchema = z.enum(['id','title','faculity','createdAt','updatedAt']);

export default DisciplineScalarFieldEnumSchema;
