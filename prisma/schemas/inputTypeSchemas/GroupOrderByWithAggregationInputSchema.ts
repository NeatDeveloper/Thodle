import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { GroupCountOrderByAggregateInputSchema } from './GroupCountOrderByAggregateInputSchema';
import { GroupAvgOrderByAggregateInputSchema } from './GroupAvgOrderByAggregateInputSchema';
import { GroupMaxOrderByAggregateInputSchema } from './GroupMaxOrderByAggregateInputSchema';
import { GroupMinOrderByAggregateInputSchema } from './GroupMinOrderByAggregateInputSchema';
import { GroupSumOrderByAggregateInputSchema } from './GroupSumOrderByAggregateInputSchema';

export const GroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.GroupOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GroupCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GroupAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GroupMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GroupSumOrderByAggregateInputSchema).optional()
}).strict();

export default GroupOrderByWithAggregationInputSchema;
