import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const FaculityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FaculityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default FaculityOrderByRelationAggregateInputSchema;
