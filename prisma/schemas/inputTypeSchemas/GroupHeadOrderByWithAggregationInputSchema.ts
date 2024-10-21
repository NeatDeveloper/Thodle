import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { GroupHeadCountOrderByAggregateInputSchema } from './GroupHeadCountOrderByAggregateInputSchema';
import { GroupHeadAvgOrderByAggregateInputSchema } from './GroupHeadAvgOrderByAggregateInputSchema';
import { GroupHeadMaxOrderByAggregateInputSchema } from './GroupHeadMaxOrderByAggregateInputSchema';
import { GroupHeadMinOrderByAggregateInputSchema } from './GroupHeadMinOrderByAggregateInputSchema';
import { GroupHeadSumOrderByAggregateInputSchema } from './GroupHeadSumOrderByAggregateInputSchema';

export const GroupHeadOrderByWithAggregationInputSchema: z.ZodType<Prisma.GroupHeadOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GroupHeadCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GroupHeadAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GroupHeadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GroupHeadMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GroupHeadSumOrderByAggregateInputSchema).optional()
}).strict();

export default GroupHeadOrderByWithAggregationInputSchema;
