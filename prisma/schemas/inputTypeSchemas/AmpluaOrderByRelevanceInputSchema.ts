import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaOrderByRelevanceFieldEnumSchema } from './AmpluaOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AmpluaOrderByRelevanceInputSchema: z.ZodType<Prisma.AmpluaOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AmpluaOrderByRelevanceFieldEnumSchema),z.lazy(() => AmpluaOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default AmpluaOrderByRelevanceInputSchema;
