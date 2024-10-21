import { z } from 'zod';

export const LectorRankOrderByRelevanceFieldEnumSchema = z.enum(['title','shortVariant','lectorId']);

export default LectorRankOrderByRelevanceFieldEnumSchema;
