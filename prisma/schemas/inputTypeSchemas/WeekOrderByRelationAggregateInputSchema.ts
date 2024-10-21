import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WeekOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WeekOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WeekOrderByRelationAggregateInputSchema;
