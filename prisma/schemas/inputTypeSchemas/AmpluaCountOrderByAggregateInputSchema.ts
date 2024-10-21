import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AmpluaCountOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AmpluaCountOrderByAggregateInputSchema;
