import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AmpluaOrderByWithRelationInputSchema } from './AmpluaOrderByWithRelationInputSchema';
import { GroupOrderByWithRelationInputSchema } from './GroupOrderByWithRelationInputSchema';
import { StudentOrderByRelevanceInputSchema } from './StudentOrderByRelevanceInputSchema';

export const StudentOrderByWithRelationInputSchema: z.ZodType<Prisma.StudentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  Group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => StudentOrderByRelevanceInputSchema).optional()
}).strict();

export default StudentOrderByWithRelationInputSchema;
