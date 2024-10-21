import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserSumOrderByAggregateInputSchema;
