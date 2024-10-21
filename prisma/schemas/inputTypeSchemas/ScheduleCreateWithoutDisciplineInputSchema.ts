import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ScheduleCreateWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateWithoutDisciplineInput> = z.object({
}).strict();

export default ScheduleCreateWithoutDisciplineInputSchema;
