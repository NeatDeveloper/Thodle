import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleIncludeSchema } from '../inputTypeSchemas/ScheduleIncludeSchema'
import { ScheduleWhereInputSchema } from '../inputTypeSchemas/ScheduleWhereInputSchema'
import { ScheduleOrderByWithRelationInputSchema } from '../inputTypeSchemas/ScheduleOrderByWithRelationInputSchema'
import { ScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ScheduleWhereUniqueInputSchema'
import { ScheduleScalarFieldEnumSchema } from '../inputTypeSchemas/ScheduleScalarFieldEnumSchema'
import { DisciplineArgsSchema } from "../outputTypeSchemas/DisciplineArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScheduleSelectSchema: z.ZodType<Prisma.ScheduleSelect> = z.object({
  id: z.boolean().optional(),
  discipline: z.boolean().optional(),
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export const ScheduleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ScheduleFindFirstOrThrowArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithRelationInputSchema.array(),ScheduleOrderByWithRelationInputSchema ]).optional(),
  cursor: ScheduleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScheduleScalarFieldEnumSchema,ScheduleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ScheduleFindFirstOrThrowArgsSchema;
