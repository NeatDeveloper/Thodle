import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleSelectSchema } from '../inputTypeSchemas/ScheduleSelectSchema';
import { ScheduleIncludeSchema } from '../inputTypeSchemas/ScheduleIncludeSchema';

export const ScheduleArgsSchema: z.ZodType<Prisma.ScheduleDefaultArgs> = z.object({
  select: z.lazy(() => ScheduleSelectSchema).optional(),
  include: z.lazy(() => ScheduleIncludeSchema).optional(),
}).strict();

export default ScheduleArgsSchema;
