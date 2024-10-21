import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TutorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TutorAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TutorAvgOrderByAggregateInputSchema;
