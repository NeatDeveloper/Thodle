import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WeekCountOrderByAggregateInputSchema } from './WeekCountOrderByAggregateInputSchema';
import { WeekAvgOrderByAggregateInputSchema } from './WeekAvgOrderByAggregateInputSchema';
import { WeekMaxOrderByAggregateInputSchema } from './WeekMaxOrderByAggregateInputSchema';
import { WeekMinOrderByAggregateInputSchema } from './WeekMinOrderByAggregateInputSchema';
import { WeekSumOrderByAggregateInputSchema } from './WeekSumOrderByAggregateInputSchema';

export const WeekOrderByWithAggregationInputSchema: z.ZodType<Prisma.WeekOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WeekCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WeekAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WeekMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WeekMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WeekSumOrderByAggregateInputSchema).optional()
}).strict();

export default WeekOrderByWithAggregationInputSchema;
