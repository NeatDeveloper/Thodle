import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineFindManyArgsSchema } from "../outputTypeSchemas/DisciplineFindManyArgsSchema"
import { LectorFindManyArgsSchema } from "../outputTypeSchemas/LectorFindManyArgsSchema"
import { GroupFindManyArgsSchema } from "../outputTypeSchemas/GroupFindManyArgsSchema"
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"
import { FaculityCountOutputTypeArgsSchema } from "../outputTypeSchemas/FaculityCountOutputTypeArgsSchema"

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

export default FaculitySelectSchema;
