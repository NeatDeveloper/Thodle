import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuditoriumCountOrderByAggregateInputSchema } from './AuditoriumCountOrderByAggregateInputSchema';
import { AuditoriumAvgOrderByAggregateInputSchema } from './AuditoriumAvgOrderByAggregateInputSchema';
import { AuditoriumMaxOrderByAggregateInputSchema } from './AuditoriumMaxOrderByAggregateInputSchema';
import { AuditoriumMinOrderByAggregateInputSchema } from './AuditoriumMinOrderByAggregateInputSchema';
import { AuditoriumSumOrderByAggregateInputSchema } from './AuditoriumSumOrderByAggregateInputSchema';

export const AuditoriumOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuditoriumOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuditoriumCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AuditoriumAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuditoriumMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuditoriumMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AuditoriumSumOrderByAggregateInputSchema).optional()
}).strict();

export default AuditoriumOrderByWithAggregationInputSchema;
