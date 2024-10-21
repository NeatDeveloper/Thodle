import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekFindManyArgsSchema } from "../outputTypeSchemas/WeekFindManyArgsSchema"
import { FaculityFindManyArgsSchema } from "../outputTypeSchemas/FaculityFindManyArgsSchema"
import { BuildingFindManyArgsSchema } from "../outputTypeSchemas/BuildingFindManyArgsSchema"
import { UniversityCountOutputTypeArgsSchema } from "../outputTypeSchemas/UniversityCountOutputTypeArgsSchema"

export const UniversitySelectSchema: z.ZodType<Prisma.UniversitySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  fullName: z.boolean().optional(),
  city: z.boolean().optional(),
  studyTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  weeks: z.union([z.boolean(),z.lazy(() => WeekFindManyArgsSchema)]).optional(),
  faculties: z.union([z.boolean(),z.lazy(() => FaculityFindManyArgsSchema)]).optional(),
  buildings: z.union([z.boolean(),z.lazy(() => BuildingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UniversityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UniversitySelectSchema;
