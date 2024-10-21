import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GroupHeadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GroupHeadOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GroupHeadOrderByRelationAggregateInputSchema;
