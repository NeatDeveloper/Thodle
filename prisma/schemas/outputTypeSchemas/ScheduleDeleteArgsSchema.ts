import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleIncludeSchema } from '../inputTypeSchemas/ScheduleIncludeSchema'
import { ScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ScheduleWhereUniqueInputSchema'
import { DisciplineArgsSchema } from "../outputTypeSchemas/DisciplineArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScheduleSelectSchema: z.ZodType<Prisma.ScheduleSelect> = z.object({
  id: z.boolean().optional(),
  discipline: z.boolean().optional(),
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export const ScheduleDeleteArgsSchema: z.ZodType<Prisma.ScheduleDeleteArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereUniqueInputSchema,
}).strict() ;

export default ScheduleDeleteArgsSchema;
