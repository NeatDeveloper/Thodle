import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingIncludeSchema } from '../inputTypeSchemas/BuildingIncludeSchema'
import { BuildingWhereInputSchema } from '../inputTypeSchemas/BuildingWhereInputSchema'
import { BuildingOrderByWithRelationInputSchema } from '../inputTypeSchemas/BuildingOrderByWithRelationInputSchema'
import { BuildingWhereUniqueInputSchema } from '../inputTypeSchemas/BuildingWhereUniqueInputSchema'
import { BuildingScalarFieldEnumSchema } from '../inputTypeSchemas/BuildingScalarFieldEnumSchema'
import { AuditoriumFindManyArgsSchema } from "../outputTypeSchemas/AuditoriumFindManyArgsSchema"
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"
import { BuildingCountOutputTypeArgsSchema } from "../outputTypeSchemas/BuildingCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BuildingSelectSchema: z.ZodType<Prisma.BuildingSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  nonVerbalName: z.boolean().optional(),
  address: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  auditoriums: z.union([z.boolean(),z.lazy(() => AuditoriumFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BuildingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BuildingFindFirstArgsSchema: z.ZodType<Prisma.BuildingFindFirstArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithRelationInputSchema.array(),BuildingOrderByWithRelationInputSchema ]).optional(),
  cursor: BuildingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingScalarFieldEnumSchema,BuildingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BuildingFindFirstArgsSchema;
