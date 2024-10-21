import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UniversitySumOrderByAggregateInputSchema: z.ZodType<Prisma.UniversitySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UniversitySumOrderByAggregateInputSchema;
