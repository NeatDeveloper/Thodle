import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankIncludeSchema } from '../inputTypeSchemas/LectorRankIncludeSchema'
import { LectorRankWhereInputSchema } from '../inputTypeSchemas/LectorRankWhereInputSchema'
import { LectorRankOrderByWithRelationInputSchema } from '../inputTypeSchemas/LectorRankOrderByWithRelationInputSchema'
import { LectorRankWhereUniqueInputSchema } from '../inputTypeSchemas/LectorRankWhereUniqueInputSchema'
import { LectorRankScalarFieldEnumSchema } from '../inputTypeSchemas/LectorRankScalarFieldEnumSchema'
import { LectorArgsSchema } from "../outputTypeSchemas/LectorArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LectorRankSelectSchema: z.ZodType<Prisma.LectorRankSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  shortVariant: z.boolean().optional(),
  lectorId: z.boolean().optional(),
  Lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

export const LectorRankFindFirstArgsSchema: z.ZodType<Prisma.LectorRankFindFirstArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithRelationInputSchema.array(),LectorRankOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorRankWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorRankScalarFieldEnumSchema,LectorRankScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LectorRankFindFirstArgsSchema;
