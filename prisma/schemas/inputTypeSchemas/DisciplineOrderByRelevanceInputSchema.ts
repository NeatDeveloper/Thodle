import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineOrderByRelevanceFieldEnumSchema } from './DisciplineOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DisciplineOrderByRelevanceInputSchema: z.ZodType<Prisma.DisciplineOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DisciplineOrderByRelevanceFieldEnumSchema),z.lazy(() => DisciplineOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DisciplineOrderByRelevanceInputSchema;
