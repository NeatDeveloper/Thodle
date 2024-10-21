import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TutorCountOrderByAggregateInputSchema } from './TutorCountOrderByAggregateInputSchema';
import { TutorAvgOrderByAggregateInputSchema } from './TutorAvgOrderByAggregateInputSchema';
import { TutorMaxOrderByAggregateInputSchema } from './TutorMaxOrderByAggregateInputSchema';
import { TutorMinOrderByAggregateInputSchema } from './TutorMinOrderByAggregateInputSchema';
import { TutorSumOrderByAggregateInputSchema } from './TutorSumOrderByAggregateInputSchema';

export const TutorOrderByWithAggregationInputSchema: z.ZodType<Prisma.TutorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TutorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TutorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TutorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TutorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TutorSumOrderByAggregateInputSchema).optional()
}).strict();

export default TutorOrderByWithAggregationInputSchema;
