import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DisciplineCountOrderByAggregateInputSchema } from './DisciplineCountOrderByAggregateInputSchema';
import { DisciplineAvgOrderByAggregateInputSchema } from './DisciplineAvgOrderByAggregateInputSchema';
import { DisciplineMaxOrderByAggregateInputSchema } from './DisciplineMaxOrderByAggregateInputSchema';
import { DisciplineMinOrderByAggregateInputSchema } from './DisciplineMinOrderByAggregateInputSchema';
import { DisciplineSumOrderByAggregateInputSchema } from './DisciplineSumOrderByAggregateInputSchema';

export const DisciplineOrderByWithAggregationInputSchema: z.ZodType<Prisma.DisciplineOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DisciplineCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DisciplineAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DisciplineMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DisciplineMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DisciplineSumOrderByAggregateInputSchema).optional()
}).strict();

export default DisciplineOrderByWithAggregationInputSchema;
