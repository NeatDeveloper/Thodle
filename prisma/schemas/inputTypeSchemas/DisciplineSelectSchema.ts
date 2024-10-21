import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleFindManyArgsSchema } from "../outputTypeSchemas/ScheduleFindManyArgsSchema"
import { FaculityArgsSchema } from "../outputTypeSchemas/FaculityArgsSchema"
import { DisciplineCountOutputTypeArgsSchema } from "../outputTypeSchemas/DisciplineCountOutputTypeArgsSchema"

export const DisciplineSelectSchema: z.ZodType<Prisma.DisciplineSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  faculity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  schedules: z.union([z.boolean(),z.lazy(() => ScheduleFindManyArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DisciplineCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DisciplineSelectSchema;
