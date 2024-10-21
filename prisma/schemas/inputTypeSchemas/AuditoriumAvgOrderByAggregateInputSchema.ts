import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuditoriumAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AuditoriumAvgOrderByAggregateInputSchema;
