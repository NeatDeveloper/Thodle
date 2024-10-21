import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityIncludeSchema } from '../inputTypeSchemas/FaculityIncludeSchema'
import { FaculityWhereUniqueInputSchema } from '../inputTypeSchemas/FaculityWhereUniqueInputSchema'
import { DisciplineFindManyArgsSchema } from "../outputTypeSchemas/DisciplineFindManyArgsSchema"
import { LectorFindManyArgsSchema } from "../outputTypeSchemas/LectorFindManyArgsSchema"
import { GroupFindManyArgsSchema } from "../outputTypeSchemas/GroupFindManyArgsSchema"
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"
import { FaculityCountOutputTypeArgsSchema } from "../outputTypeSchemas/FaculityCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FaculitySelectSchema: z.ZodType<Prisma.FaculitySelect> = z.object({
  id: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  disciplines: z.union([z.boolean(),z.lazy(() => DisciplineFindManyArgsSchema)]).optional(),
  lectors: z.union([z.boolean(),z.lazy(() => LectorFindManyArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FaculityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FaculityFindUniqueArgsSchema: z.ZodType<Prisma.FaculityFindUniqueArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereUniqueInputSchema,
}).strict() ;

export default FaculityFindUniqueArgsSchema;
