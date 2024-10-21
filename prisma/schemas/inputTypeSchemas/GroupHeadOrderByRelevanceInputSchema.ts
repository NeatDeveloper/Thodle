import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadOrderByRelevanceFieldEnumSchema } from './GroupHeadOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const GroupHeadOrderByRelevanceInputSchema: z.ZodType<Prisma.GroupHeadOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => GroupHeadOrderByRelevanceFieldEnumSchema),z.lazy(() => GroupHeadOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default GroupHeadOrderByRelevanceInputSchema;
