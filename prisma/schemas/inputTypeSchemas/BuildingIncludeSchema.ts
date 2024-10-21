import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumFindManyArgsSchema } from "../outputTypeSchemas/AuditoriumFindManyArgsSchema"
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"
import { BuildingCountOutputTypeArgsSchema } from "../outputTypeSchemas/BuildingCountOutputTypeArgsSchema"

export const BuildingIncludeSchema: z.ZodType<Prisma.BuildingInclude> = z.object({
  auditoriums: z.union([z.boolean(),z.lazy(() => AuditoriumFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BuildingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BuildingIncludeSchema;
