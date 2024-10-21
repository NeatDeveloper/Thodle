import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AmpluaSumOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AmpluaSumOrderByAggregateInputSchema;
