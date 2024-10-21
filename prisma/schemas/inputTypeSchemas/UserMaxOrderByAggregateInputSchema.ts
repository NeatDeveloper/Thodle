import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  lang: z.lazy(() => SortOrderSchema).optional(),
  isBot: z.lazy(() => SortOrderSchema).optional(),
  isPremium: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserMaxOrderByAggregateInputSchema;
