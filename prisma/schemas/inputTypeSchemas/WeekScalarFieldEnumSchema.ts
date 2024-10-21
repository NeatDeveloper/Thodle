import { z } from 'zod';

export const WeekScalarFieldEnumSchema = z.enum(['id','title','count','university','createdAt','updatedAt']);

export default WeekScalarFieldEnumSchema;
