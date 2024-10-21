import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ScheduleUncheckedCreateWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUncheckedCreateWithoutDisciplineInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default ScheduleUncheckedCreateWithoutDisciplineInputSchema;
