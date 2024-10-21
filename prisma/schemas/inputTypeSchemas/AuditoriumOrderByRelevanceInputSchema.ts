import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumOrderByRelevanceFieldEnumSchema } from './AuditoriumOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AuditoriumOrderByRelevanceInputSchema: z.ZodType<Prisma.AuditoriumOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AuditoriumOrderByRelevanceFieldEnumSchema),z.lazy(() => AuditoriumOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default AuditoriumOrderByRelevanceInputSchema;
