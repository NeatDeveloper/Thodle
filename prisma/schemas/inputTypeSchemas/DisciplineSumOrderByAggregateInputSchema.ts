import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DisciplineSumOrderByAggregateInputSchema: z.ZodType<Prisma.DisciplineSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DisciplineSumOrderByAggregateInputSchema;
