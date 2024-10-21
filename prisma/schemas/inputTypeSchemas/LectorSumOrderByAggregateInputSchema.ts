import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorSumOrderByAggregateInputSchema: z.ZodType<Prisma.LectorSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LectorSumOrderByAggregateInputSchema;
