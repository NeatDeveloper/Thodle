import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleIncludeSchema } from '../inputTypeSchemas/ScheduleIncludeSchema'
import { ScheduleCreateInputSchema } from '../inputTypeSchemas/ScheduleCreateInputSchema'
import { ScheduleUncheckedCreateInputSchema } from '../inputTypeSchemas/ScheduleUncheckedCreateInputSchema'
import { DisciplineArgsSchema } from "../outputTypeSchemas/DisciplineArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScheduleSelectSchema: z.ZodType<Prisma.ScheduleSelect> = z.object({
  id: z.boolean().optional(),
  discipline: z.boolean().optional(),
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export const ScheduleCreateArgsSchema: z.ZodType<Prisma.ScheduleCreateArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  data: z.union([ ScheduleCreateInputSchema,ScheduleUncheckedCreateInputSchema ]),
}).strict() ;

export default ScheduleCreateArgsSchema;
