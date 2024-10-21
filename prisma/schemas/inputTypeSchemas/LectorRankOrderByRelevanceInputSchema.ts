import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankOrderByRelevanceFieldEnumSchema } from './LectorRankOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorRankOrderByRelevanceInputSchema: z.ZodType<Prisma.LectorRankOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LectorRankOrderByRelevanceFieldEnumSchema),z.lazy(() => LectorRankOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LectorRankOrderByRelevanceInputSchema;
