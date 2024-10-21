import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ScheduleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ScheduleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ScheduleOrderByRelationAggregateInputSchema;
