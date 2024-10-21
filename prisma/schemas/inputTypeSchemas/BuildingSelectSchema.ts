import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumFindManyArgsSchema } from "../outputTypeSchemas/AuditoriumFindManyArgsSchema"
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"
import { BuildingCountOutputTypeArgsSchema } from "../outputTypeSchemas/BuildingCountOutputTypeArgsSchema"

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

export default BuildingSelectSchema;
