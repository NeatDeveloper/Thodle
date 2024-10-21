import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingIncludeSchema } from '../inputTypeSchemas/BuildingIncludeSchema'
import { BuildingWhereUniqueInputSchema } from '../inputTypeSchemas/BuildingWhereUniqueInputSchema'
import { BuildingCreateInputSchema } from '../inputTypeSchemas/BuildingCreateInputSchema'
import { BuildingUncheckedCreateInputSchema } from '../inputTypeSchemas/BuildingUncheckedCreateInputSchema'
import { BuildingUpdateInputSchema } from '../inputTypeSchemas/BuildingUpdateInputSchema'
import { BuildingUncheckedUpdateInputSchema } from '../inputTypeSchemas/BuildingUncheckedUpdateInputSchema'
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

export const BuildingUpsertArgsSchema: z.ZodType<Prisma.BuildingUpsertArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereUniqueInputSchema,
  create: z.union([ BuildingCreateInputSchema,BuildingUncheckedCreateInputSchema ]),
  update: z.union([ BuildingUpdateInputSchema,BuildingUncheckedUpdateInputSchema ]),
}).strict() ;

export default BuildingUpsertArgsSchema;
