import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ScheduleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ScheduleAvgOrderByAggregateInputSchema;
