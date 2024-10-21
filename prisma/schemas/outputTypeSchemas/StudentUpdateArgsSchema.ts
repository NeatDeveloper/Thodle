import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentIncludeSchema } from '../inputTypeSchemas/StudentIncludeSchema'
import { StudentUpdateInputSchema } from '../inputTypeSchemas/StudentUpdateInputSchema'
import { StudentUncheckedUpdateInputSchema } from '../inputTypeSchemas/StudentUncheckedUpdateInputSchema'
import { StudentWhereUniqueInputSchema } from '../inputTypeSchemas/StudentWhereUniqueInputSchema'
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudentSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
}).strict()

export const StudentUpdateArgsSchema: z.ZodType<Prisma.StudentUpdateArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentUpdateInputSchema,StudentUncheckedUpdateInputSchema ]),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export default StudentUpdateArgsSchema;
