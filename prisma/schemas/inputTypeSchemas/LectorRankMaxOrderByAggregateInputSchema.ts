import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorRankMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LectorRankMaxOrderByAggregateInputSchema;
