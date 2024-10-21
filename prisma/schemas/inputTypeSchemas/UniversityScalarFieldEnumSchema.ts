import { z } from 'zod';

export const UniversityScalarFieldEnumSchema = z.enum(['id','name','fullName','city','studyTime','createdAt','updatedAt']);

export default UniversityScalarFieldEnumSchema;
