import { z } from 'zod';

export const LectorOrderByRelevanceFieldEnumSchema = z.enum(['id','lastName','firstName','surname','initials']);

export default LectorOrderByRelevanceFieldEnumSchema;
