import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorOrderByRelevanceFieldEnumSchema } from './LectorOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorOrderByRelevanceInputSchema: z.ZodType<Prisma.LectorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LectorOrderByRelevanceFieldEnumSchema),z.lazy(() => LectorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default LectorOrderByRelevanceInputSchema;
