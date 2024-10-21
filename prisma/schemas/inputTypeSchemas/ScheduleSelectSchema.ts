import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineArgsSchema } from "../outputTypeSchemas/DisciplineArgsSchema"

export const ScheduleSelectSchema: z.ZodType<Prisma.ScheduleSelect> = z.object({
  id: z.boolean().optional(),
  discipline: z.boolean().optional(),
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export default ScheduleSelectSchema;
