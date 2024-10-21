import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UniversityCountOrderByAggregateInputSchema } from './UniversityCountOrderByAggregateInputSchema';
import { UniversityAvgOrderByAggregateInputSchema } from './UniversityAvgOrderByAggregateInputSchema';
import { UniversityMaxOrderByAggregateInputSchema } from './UniversityMaxOrderByAggregateInputSchema';
import { UniversityMinOrderByAggregateInputSchema } from './UniversityMinOrderByAggregateInputSchema';
import { UniversitySumOrderByAggregateInputSchema } from './UniversitySumOrderByAggregateInputSchema';

export const UniversityOrderByWithAggregationInputSchema: z.ZodType<Prisma.UniversityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  studyTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UniversityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UniversityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UniversityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UniversityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UniversitySumOrderByAggregateInputSchema).optional()
}).strict();

export default UniversityOrderByWithAggregationInputSchema;
