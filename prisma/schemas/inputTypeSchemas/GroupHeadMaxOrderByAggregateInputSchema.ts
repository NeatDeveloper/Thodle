import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GroupHeadMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GroupHeadMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GroupHeadMaxOrderByAggregateInputSchema;
