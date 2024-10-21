import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentIncludeSchema } from '../inputTypeSchemas/StudentIncludeSchema'
import { StudentCreateInputSchema } from '../inputTypeSchemas/StudentCreateInputSchema'
import { StudentUncheckedCreateInputSchema } from '../inputTypeSchemas/StudentUncheckedCreateInputSchema'
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

export const StudentCreateArgsSchema: z.ZodType<Prisma.StudentCreateArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentCreateInputSchema,StudentUncheckedCreateInputSchema ]),
}).strict() ;

export default StudentCreateArgsSchema;
