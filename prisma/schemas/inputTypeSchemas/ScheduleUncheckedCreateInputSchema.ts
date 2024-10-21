import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ScheduleUncheckedCreateInputSchema: z.ZodType<Prisma.ScheduleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  discipline: z.number().int()
}).strict();

export default ScheduleUncheckedCreateInputSchema;
