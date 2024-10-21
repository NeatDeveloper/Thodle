import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LectorAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LectorAvgOrderByAggregateInputSchema;
