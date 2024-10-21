import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityOrderByRelevanceFieldEnumSchema } from './UniversityOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const UniversityOrderByRelevanceInputSchema: z.ZodType<Prisma.UniversityOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UniversityOrderByRelevanceFieldEnumSchema),z.lazy(() => UniversityOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default UniversityOrderByRelevanceInputSchema;
