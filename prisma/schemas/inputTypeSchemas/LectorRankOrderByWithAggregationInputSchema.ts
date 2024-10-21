import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LectorRankCountOrderByAggregateInputSchema } from './LectorRankCountOrderByAggregateInputSchema';
import { LectorRankAvgOrderByAggregateInputSchema } from './LectorRankAvgOrderByAggregateInputSchema';
import { LectorRankMaxOrderByAggregateInputSchema } from './LectorRankMaxOrderByAggregateInputSchema';
import { LectorRankMinOrderByAggregateInputSchema } from './LectorRankMinOrderByAggregateInputSchema';
import { LectorRankSumOrderByAggregateInputSchema } from './LectorRankSumOrderByAggregateInputSchema';

export const LectorRankOrderByWithAggregationInputSchema: z.ZodType<Prisma.LectorRankOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LectorRankCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LectorRankAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LectorRankMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LectorRankMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LectorRankSumOrderByAggregateInputSchema).optional()
}).strict();

export default LectorRankOrderByWithAggregationInputSchema;
