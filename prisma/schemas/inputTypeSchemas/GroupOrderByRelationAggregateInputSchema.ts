import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GroupOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GroupOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GroupOrderByRelationAggregateInputSchema;
