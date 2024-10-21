import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ScheduleCreateManyDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateManyDisciplineInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default ScheduleCreateManyDisciplineInputSchema;
