import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleFindManyArgsSchema } from "../outputTypeSchemas/ScheduleFindManyArgsSchema"
import { FaculityArgsSchema } from "../outputTypeSchemas/FaculityArgsSchema"
import { DisciplineCountOutputTypeArgsSchema } from "../outputTypeSchemas/DisciplineCountOutputTypeArgsSchema"

export const DisciplineIncludeSchema: z.ZodType<Prisma.DisciplineInclude> = z.object({
  schedules: z.union([z.boolean(),z.lazy(() => ScheduleFindManyArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DisciplineCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DisciplineIncludeSchema;
