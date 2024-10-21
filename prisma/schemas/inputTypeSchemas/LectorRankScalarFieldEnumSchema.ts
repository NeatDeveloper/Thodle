import { z } from 'zod';

export const LectorRankScalarFieldEnumSchema = z.enum(['id','title','shortVariant','lectorId']);

export default LectorRankScalarFieldEnumSchema;
