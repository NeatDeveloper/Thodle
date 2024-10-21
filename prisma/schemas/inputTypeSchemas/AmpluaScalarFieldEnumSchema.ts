import { z } from 'zod';

export const AmpluaScalarFieldEnumSchema = z.enum(['id','tgID','amplua','createdAt','updatedAt']);

export default AmpluaScalarFieldEnumSchema;
