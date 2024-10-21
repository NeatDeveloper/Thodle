import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekOrderByRelevanceFieldEnumSchema } from './WeekOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WeekOrderByRelevanceInputSchema: z.ZodType<Prisma.WeekOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WeekOrderByRelevanceFieldEnumSchema),z.lazy(() => WeekOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WeekOrderByRelevanceInputSchema;
