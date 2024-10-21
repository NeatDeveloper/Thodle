import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WeekSumOrderByAggregateInputSchema: z.ZodType<Prisma.WeekSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WeekSumOrderByAggregateInputSchema;
