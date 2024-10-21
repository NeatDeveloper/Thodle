import { z } from 'zod';

export const BuildingScalarFieldEnumSchema = z.enum(['id','title','nonVerbalName','address','university','createdAt','updatedAt']);

export default BuildingScalarFieldEnumSchema;
