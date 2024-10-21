import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumIncludeSchema } from '../inputTypeSchemas/AuditoriumIncludeSchema'
import { AuditoriumWhereInputSchema } from '../inputTypeSchemas/AuditoriumWhereInputSchema'
import { AuditoriumOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuditoriumOrderByWithRelationInputSchema'
import { AuditoriumWhereUniqueInputSchema } from '../inputTypeSchemas/AuditoriumWhereUniqueInputSchema'
import { AuditoriumScalarFieldEnumSchema } from '../inputTypeSchemas/AuditoriumScalarFieldEnumSchema'
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

export const AuditoriumFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuditoriumFindFirstOrThrowArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithRelationInputSchema.array(),AuditoriumOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditoriumWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuditoriumScalarFieldEnumSchema,AuditoriumScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AuditoriumFindFirstOrThrowArgsSchema;
