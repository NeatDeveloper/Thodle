import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateNestedOneWithoutSchedulesInputSchema } from './DisciplineCreateNestedOneWithoutSchedulesInputSchema';

export const ScheduleCreateInputSchema: z.ZodType<Prisma.ScheduleCreateInput> = z.object({
  Discipline: z.lazy(() => DisciplineCreateNestedOneWithoutSchedulesInputSchema)
}).strict();

export default ScheduleCreateInputSchema;
