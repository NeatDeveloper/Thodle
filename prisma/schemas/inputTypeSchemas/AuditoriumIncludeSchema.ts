import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingArgsSchema } from "../outputTypeSchemas/BuildingArgsSchema"

export const AuditoriumIncludeSchema: z.ZodType<Prisma.AuditoriumInclude> = z.object({
  Building: z.union([z.boolean(),z.lazy(() => BuildingArgsSchema)]).optional(),
}).strict()

export default AuditoriumIncludeSchema;
