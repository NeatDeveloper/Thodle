import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DisciplineOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DisciplineOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DisciplineOrderByRelationAggregateInputSchema;
