import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorRankOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LectorRankOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LectorRankOrderByRelationAggregateInputSchema;
