import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AmpluaCountOrderByAggregateInputSchema } from './AmpluaCountOrderByAggregateInputSchema';
import { AmpluaAvgOrderByAggregateInputSchema } from './AmpluaAvgOrderByAggregateInputSchema';
import { AmpluaMaxOrderByAggregateInputSchema } from './AmpluaMaxOrderByAggregateInputSchema';
import { AmpluaMinOrderByAggregateInputSchema } from './AmpluaMinOrderByAggregateInputSchema';
import { AmpluaSumOrderByAggregateInputSchema } from './AmpluaSumOrderByAggregateInputSchema';

export const AmpluaOrderByWithAggregationInputSchema: z.ZodType<Prisma.AmpluaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AmpluaCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AmpluaAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AmpluaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AmpluaMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AmpluaSumOrderByAggregateInputSchema).optional()
}).strict();

export default AmpluaOrderByWithAggregationInputSchema;
