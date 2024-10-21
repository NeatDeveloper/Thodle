import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CuratorCountOrderByAggregateInputSchema } from './CuratorCountOrderByAggregateInputSchema';
import { CuratorAvgOrderByAggregateInputSchema } from './CuratorAvgOrderByAggregateInputSchema';
import { CuratorMaxOrderByAggregateInputSchema } from './CuratorMaxOrderByAggregateInputSchema';
import { CuratorMinOrderByAggregateInputSchema } from './CuratorMinOrderByAggregateInputSchema';
import { CuratorSumOrderByAggregateInputSchema } from './CuratorSumOrderByAggregateInputSchema';

export const CuratorOrderByWithAggregationInputSchema: z.ZodType<Prisma.CuratorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CuratorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CuratorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CuratorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CuratorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CuratorSumOrderByAggregateInputSchema).optional()
}).strict();

export default CuratorOrderByWithAggregationInputSchema;
