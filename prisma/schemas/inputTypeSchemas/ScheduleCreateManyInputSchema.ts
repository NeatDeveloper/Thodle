import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ScheduleCreateManyInputSchema: z.ZodType<Prisma.ScheduleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  discipline: z.number().int()
}).strict();

export default ScheduleCreateManyInputSchema;
