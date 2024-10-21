import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityIncludeSchema } from '../inputTypeSchemas/UniversityIncludeSchema'
import { UniversityCreateInputSchema } from '../inputTypeSchemas/UniversityCreateInputSchema'
import { UniversityUncheckedCreateInputSchema } from '../inputTypeSchemas/UniversityUncheckedCreateInputSchema'
import { WeekFindManyArgsSchema } from "../outputTypeSchemas/WeekFindManyArgsSchema"
import { FaculityFindManyArgsSchema } from "../outputTypeSchemas/FaculityFindManyArgsSchema"
import { BuildingFindManyArgsSchema } from "../outputTypeSchemas/BuildingFindManyArgsSchema"
import { UniversityCountOutputTypeArgsSchema } from "../outputTypeSchemas/UniversityCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const UniversityCreateArgsSchema: z.ZodType<Prisma.UniversityCreateArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  data: z.union([ UniversityCreateInputSchema,UniversityUncheckedCreateInputSchema ]),
}).strict() ;

export default UniversityCreateArgsSchema;
