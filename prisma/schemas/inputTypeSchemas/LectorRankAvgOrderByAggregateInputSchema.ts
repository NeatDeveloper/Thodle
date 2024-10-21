import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LectorRankAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LectorRankAvgOrderByAggregateInputSchema;
