import { z } from 'zod';

export const LectorScalarFieldEnumSchema = z.enum(['id','tgID','lastName','firstName','surname','initials','group','faculity','createdAt','updatedAt']);

export default LectorScalarFieldEnumSchema;
