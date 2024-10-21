import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleIncludeSchema } from '../inputTypeSchemas/ScheduleIncludeSchema'
import { ScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ScheduleWhereUniqueInputSchema'
import { ScheduleCreateInputSchema } from '../inputTypeSchemas/ScheduleCreateInputSchema'
import { ScheduleUncheckedCreateInputSchema } from '../inputTypeSchemas/ScheduleUncheckedCreateInputSchema'
import { ScheduleUpdateInputSchema } from '../inputTypeSchemas/ScheduleUpdateInputSchema'
import { ScheduleUncheckedUpdateInputSchema } from '../inputTypeSchemas/ScheduleUncheckedUpdateInputSchema'
import { DisciplineArgsSchema } from "../outputTypeSchemas/DisciplineArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScheduleSelectSchema: z.ZodType<Prisma.ScheduleSelect> = z.object({
  id: z.boolean().optional(),
  discipline: z.boolean().optional(),
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export const ScheduleUpsertArgsSchema: z.ZodType<Prisma.ScheduleUpsertArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereUniqueInputSchema,
  create: z.union([ ScheduleCreateInputSchema,ScheduleUncheckedCreateInputSchema ]),
  update: z.union([ ScheduleUpdateInputSchema,ScheduleUncheckedUpdateInputSchema ]),
}).strict() ;

export default ScheduleUpsertArgsSchema;
