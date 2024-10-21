import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DisciplineOrderByWithRelationInputSchema } from './DisciplineOrderByWithRelationInputSchema';

export const ScheduleOrderByWithRelationInputSchema: z.ZodType<Prisma.ScheduleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional(),
  Discipline: z.lazy(() => DisciplineOrderByWithRelationInputSchema).optional()
}).strict();

export default ScheduleOrderByWithRelationInputSchema;
