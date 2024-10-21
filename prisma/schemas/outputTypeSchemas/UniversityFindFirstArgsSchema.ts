import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityIncludeSchema } from '../inputTypeSchemas/UniversityIncludeSchema'
import { UniversityWhereInputSchema } from '../inputTypeSchemas/UniversityWhereInputSchema'
import { UniversityOrderByWithRelationInputSchema } from '../inputTypeSchemas/UniversityOrderByWithRelationInputSchema'
import { UniversityWhereUniqueInputSchema } from '../inputTypeSchemas/UniversityWhereUniqueInputSchema'
import { UniversityScalarFieldEnumSchema } from '../inputTypeSchemas/UniversityScalarFieldEnumSchema'
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

export const UniversityFindFirstArgsSchema: z.ZodType<Prisma.UniversityFindFirstArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithRelationInputSchema.array(),UniversityOrderByWithRelationInputSchema ]).optional(),
  cursor: UniversityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UniversityScalarFieldEnumSchema,UniversityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default UniversityFindFirstArgsSchema;
