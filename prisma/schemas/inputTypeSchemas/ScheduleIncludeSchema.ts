import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineArgsSchema } from "../outputTypeSchemas/DisciplineArgsSchema"

export const ScheduleIncludeSchema: z.ZodType<Prisma.ScheduleInclude> = z.object({
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export default ScheduleIncludeSchema;
