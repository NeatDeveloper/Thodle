import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AmpluaAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AmpluaAvgOrderByAggregateInputSchema;
