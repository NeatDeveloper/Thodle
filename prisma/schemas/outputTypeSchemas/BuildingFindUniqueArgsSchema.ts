import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingIncludeSchema } from '../inputTypeSchemas/BuildingIncludeSchema'
import { BuildingWhereUniqueInputSchema } from '../inputTypeSchemas/BuildingWhereUniqueInputSchema'
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

export const BuildingFindUniqueArgsSchema: z.ZodType<Prisma.BuildingFindUniqueArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereUniqueInputSchema,
}).strict() ;

export default BuildingFindUniqueArgsSchema;
