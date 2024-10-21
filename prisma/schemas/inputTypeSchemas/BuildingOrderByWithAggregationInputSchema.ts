import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BuildingCountOrderByAggregateInputSchema } from './BuildingCountOrderByAggregateInputSchema';
import { BuildingAvgOrderByAggregateInputSchema } from './BuildingAvgOrderByAggregateInputSchema';
import { BuildingMaxOrderByAggregateInputSchema } from './BuildingMaxOrderByAggregateInputSchema';
import { BuildingMinOrderByAggregateInputSchema } from './BuildingMinOrderByAggregateInputSchema';
import { BuildingSumOrderByAggregateInputSchema } from './BuildingSumOrderByAggregateInputSchema';

export const BuildingOrderByWithAggregationInputSchema: z.ZodType<Prisma.BuildingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BuildingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BuildingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BuildingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BuildingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BuildingSumOrderByAggregateInputSchema).optional()
}).strict();

export default BuildingOrderByWithAggregationInputSchema;
