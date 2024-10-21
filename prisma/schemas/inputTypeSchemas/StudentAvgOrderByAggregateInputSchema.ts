import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StudentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StudentAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StudentAvgOrderByAggregateInputSchema;
