import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema } from './DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema';

export const ScheduleUpdateInputSchema: z.ZodType<Prisma.ScheduleUpdateInput> = z.object({
  Discipline: z.lazy(() => DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema).optional()
}).strict();

export default ScheduleUpdateInputSchema;
