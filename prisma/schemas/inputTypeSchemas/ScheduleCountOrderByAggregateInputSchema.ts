import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ScheduleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ScheduleCountOrderByAggregateInputSchema;
