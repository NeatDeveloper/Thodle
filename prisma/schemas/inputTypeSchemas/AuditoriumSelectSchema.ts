import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingArgsSchema } from "../outputTypeSchemas/BuildingArgsSchema"

export const AuditoriumSelectSchema: z.ZodType<Prisma.AuditoriumSelect> = z.object({
  id: z.boolean().optional(),
  building: z.boolean().optional(),
  number: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Building: z.union([z.boolean(),z.lazy(() => BuildingArgsSchema)]).optional(),
}).strict()

export default AuditoriumSelectSchema;
