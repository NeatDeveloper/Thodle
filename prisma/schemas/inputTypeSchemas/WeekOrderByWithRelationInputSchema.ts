import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UniversityOrderByWithRelationInputSchema } from './UniversityOrderByWithRelationInputSchema';
import { WeekOrderByRelevanceInputSchema } from './WeekOrderByRelevanceInputSchema';

export const WeekOrderByWithRelationInputSchema: z.ZodType<Prisma.WeekOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  University: z.lazy(() => UniversityOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => WeekOrderByRelevanceInputSchema).optional()
}).strict();

export default WeekOrderByWithRelationInputSchema;
