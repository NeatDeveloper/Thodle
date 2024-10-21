import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityIncludeSchema } from '../inputTypeSchemas/UniversityIncludeSchema'
import { UniversityWhereUniqueInputSchema } from '../inputTypeSchemas/UniversityWhereUniqueInputSchema'
import { UniversityCreateInputSchema } from '../inputTypeSchemas/UniversityCreateInputSchema'
import { UniversityUncheckedCreateInputSchema } from '../inputTypeSchemas/UniversityUncheckedCreateInputSchema'
import { UniversityUpdateInputSchema } from '../inputTypeSchemas/UniversityUpdateInputSchema'
import { UniversityUncheckedUpdateInputSchema } from '../inputTypeSchemas/UniversityUncheckedUpdateInputSchema'
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

export const UniversityUpsertArgsSchema: z.ZodType<Prisma.UniversityUpsertArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereUniqueInputSchema,
  create: z.union([ UniversityCreateInputSchema,UniversityUncheckedCreateInputSchema ]),
  update: z.union([ UniversityUpdateInputSchema,UniversityUncheckedUpdateInputSchema ]),
}).strict() ;

export default UniversityUpsertArgsSchema;
