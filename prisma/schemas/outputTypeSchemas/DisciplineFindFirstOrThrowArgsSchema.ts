import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineIncludeSchema } from '../inputTypeSchemas/DisciplineIncludeSchema'
import { DisciplineWhereInputSchema } from '../inputTypeSchemas/DisciplineWhereInputSchema'
import { DisciplineOrderByWithRelationInputSchema } from '../inputTypeSchemas/DisciplineOrderByWithRelationInputSchema'
import { DisciplineWhereUniqueInputSchema } from '../inputTypeSchemas/DisciplineWhereUniqueInputSchema'
import { DisciplineScalarFieldEnumSchema } from '../inputTypeSchemas/DisciplineScalarFieldEnumSchema'
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

export const DisciplineFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DisciplineFindFirstOrThrowArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithRelationInputSchema.array(),DisciplineOrderByWithRelationInputSchema ]).optional(),
  cursor: DisciplineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DisciplineScalarFieldEnumSchema,DisciplineScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DisciplineFindFirstOrThrowArgsSchema;
