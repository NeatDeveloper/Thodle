import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupIncludeSchema } from '../inputTypeSchemas/GroupIncludeSchema'
import { GroupWhereUniqueInputSchema } from '../inputTypeSchemas/GroupWhereUniqueInputSchema'
import { CuratorArgsSchema } from "../outputTypeSchemas/CuratorArgsSchema"
import { GroupHeadFindManyArgsSchema } from "../outputTypeSchemas/GroupHeadFindManyArgsSchema"
import { StudentFindManyArgsSchema } from "../outputTypeSchemas/StudentFindManyArgsSchema"
import { TutorArgsSchema } from "../outputTypeSchemas/TutorArgsSchema"
import { FaculityArgsSchema } from "../outputTypeSchemas/FaculityArgsSchema"
import { GroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/GroupCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupSelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
  id: z.boolean().optional(),
  groupYear: z.boolean().optional(),
  faculity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  curator: z.union([z.boolean(),z.lazy(() => CuratorArgsSchema)]).optional(),
  groupHeads: z.union([z.boolean(),z.lazy(() => GroupHeadFindManyArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => StudentFindManyArgsSchema)]).optional(),
  tutor: z.union([z.boolean(),z.lazy(() => TutorArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GroupDeleteArgsSchema: z.ZodType<Prisma.GroupDeleteArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export default GroupDeleteArgsSchema;
