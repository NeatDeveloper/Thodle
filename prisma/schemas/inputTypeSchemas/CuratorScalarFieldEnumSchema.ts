import { z } from 'zod';

export const CuratorScalarFieldEnumSchema = z.enum(['id','tgID','group','createdAt','updatedAt']);

export default CuratorScalarFieldEnumSchema;
