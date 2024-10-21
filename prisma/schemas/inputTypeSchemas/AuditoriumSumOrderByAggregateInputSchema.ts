import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuditoriumSumOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AuditoriumSumOrderByAggregateInputSchema;
