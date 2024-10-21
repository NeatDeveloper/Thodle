import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorOrderByRelevanceFieldEnumSchema } from './CuratorOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const CuratorOrderByRelevanceInputSchema: z.ZodType<Prisma.CuratorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => CuratorOrderByRelevanceFieldEnumSchema),z.lazy(() => CuratorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default CuratorOrderByRelevanceInputSchema;
