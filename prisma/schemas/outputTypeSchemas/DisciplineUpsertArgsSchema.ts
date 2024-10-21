import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineIncludeSchema } from '../inputTypeSchemas/DisciplineIncludeSchema'
import { DisciplineWhereUniqueInputSchema } from '../inputTypeSchemas/DisciplineWhereUniqueInputSchema'
import { DisciplineCreateInputSchema } from '../inputTypeSchemas/DisciplineCreateInputSchema'
import { DisciplineUncheckedCreateInputSchema } from '../inputTypeSchemas/DisciplineUncheckedCreateInputSchema'
import { DisciplineUpdateInputSchema } from '../inputTypeSchemas/DisciplineUpdateInputSchema'
import { DisciplineUncheckedUpdateInputSchema } from '../inputTypeSchemas/DisciplineUncheckedUpdateInputSchema'
import { ScheduleFindManyArgsSchema } from "../outputTypeSchemas/ScheduleFindManyArgsSchema"
import { FaculityArgsSchema } from "../outputTypeSchemas/FaculityArgsSchema"
import { DisciplineCountOutputTypeArgsSchema } from "../outputTypeSchemas/DisciplineCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const DisciplineUpsertArgsSchema: z.ZodType<Prisma.DisciplineUpsertArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereUniqueInputSchema,
  create: z.union([ DisciplineCreateInputSchema,DisciplineUncheckedCreateInputSchema ]),
  update: z.union([ DisciplineUpdateInputSchema,DisciplineUncheckedUpdateInputSchema ]),
}).strict() ;

export default DisciplineUpsertArgsSchema;
