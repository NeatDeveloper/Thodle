import { z } from 'zod';

export const AuditoriumScalarFieldEnumSchema = z.enum(['id','building','number','createdAt','updatedAt']);

export default AuditoriumScalarFieldEnumSchema;
