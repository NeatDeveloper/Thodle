import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumIncludeSchema } from '../inputTypeSchemas/AuditoriumIncludeSchema'
import { AuditoriumWhereUniqueInputSchema } from '../inputTypeSchemas/AuditoriumWhereUniqueInputSchema'
import { BuildingArgsSchema } from "../outputTypeSchemas/BuildingArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditoriumSelectSchema: z.ZodType<Prisma.AuditoriumSelect> = z.object({
  id: z.boolean().optional(),
  building: z.boolean().optional(),
  number: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Building: z.union([z.boolean(),z.lazy(() => BuildingArgsSchema)]).optional(),
}).strict()

export const AuditoriumDeleteArgsSchema: z.ZodType<Prisma.AuditoriumDeleteArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereUniqueInputSchema,
}).strict() ;

export default AuditoriumDeleteArgsSchema;
