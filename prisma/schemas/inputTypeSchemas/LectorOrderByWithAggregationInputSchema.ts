import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LectorCountOrderByAggregateInputSchema } from './LectorCountOrderByAggregateInputSchema';
import { LectorAvgOrderByAggregateInputSchema } from './LectorAvgOrderByAggregateInputSchema';
import { LectorMaxOrderByAggregateInputSchema } from './LectorMaxOrderByAggregateInputSchema';
import { LectorMinOrderByAggregateInputSchema } from './LectorMinOrderByAggregateInputSchema';
import { LectorSumOrderByAggregateInputSchema } from './LectorSumOrderByAggregateInputSchema';

export const LectorOrderByWithAggregationInputSchema: z.ZodType<Prisma.LectorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LectorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LectorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LectorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LectorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LectorSumOrderByAggregateInputSchema).optional()
}).strict();

export default LectorOrderByWithAggregationInputSchema;
