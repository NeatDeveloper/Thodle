import { z } from 'zod';

export const TutorScalarFieldEnumSchema = z.enum(['id','tgID','group','createdAt','updatedAt']);

export default TutorScalarFieldEnumSchema;
