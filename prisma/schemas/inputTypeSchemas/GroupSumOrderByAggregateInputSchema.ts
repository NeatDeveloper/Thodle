import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GroupSumOrderByAggregateInputSchema: z.ZodType<Prisma.GroupSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GroupSumOrderByAggregateInputSchema;
