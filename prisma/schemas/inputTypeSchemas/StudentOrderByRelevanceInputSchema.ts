import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentOrderByRelevanceFieldEnumSchema } from './StudentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const StudentOrderByRelevanceInputSchema: z.ZodType<Prisma.StudentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => StudentOrderByRelevanceFieldEnumSchema),z.lazy(() => StudentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default StudentOrderByRelevanceInputSchema;
