import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorOrderByRelevanceFieldEnumSchema } from './TutorOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TutorOrderByRelevanceInputSchema: z.ZodType<Prisma.TutorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TutorOrderByRelevanceFieldEnumSchema),z.lazy(() => TutorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TutorOrderByRelevanceInputSchema;
