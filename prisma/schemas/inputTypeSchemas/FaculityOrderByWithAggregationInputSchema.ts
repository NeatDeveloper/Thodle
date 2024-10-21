import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { FaculityCountOrderByAggregateInputSchema } from './FaculityCountOrderByAggregateInputSchema';
import { FaculityAvgOrderByAggregateInputSchema } from './FaculityAvgOrderByAggregateInputSchema';
import { FaculityMaxOrderByAggregateInputSchema } from './FaculityMaxOrderByAggregateInputSchema';
import { FaculityMinOrderByAggregateInputSchema } from './FaculityMinOrderByAggregateInputSchema';
import { FaculitySumOrderByAggregateInputSchema } from './FaculitySumOrderByAggregateInputSchema';

export const FaculityOrderByWithAggregationInputSchema: z.ZodType<Prisma.FaculityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FaculityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FaculityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FaculityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FaculityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FaculitySumOrderByAggregateInputSchema).optional()
}).strict();

export default FaculityOrderByWithAggregationInputSchema;
