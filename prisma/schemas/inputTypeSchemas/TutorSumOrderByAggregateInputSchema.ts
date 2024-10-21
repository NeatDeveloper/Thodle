import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TutorSumOrderByAggregateInputSchema: z.ZodType<Prisma.TutorSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TutorSumOrderByAggregateInputSchema;
