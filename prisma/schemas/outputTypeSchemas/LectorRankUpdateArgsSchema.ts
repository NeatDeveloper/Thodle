import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankIncludeSchema } from '../inputTypeSchemas/LectorRankIncludeSchema'
import { LectorRankUpdateInputSchema } from '../inputTypeSchemas/LectorRankUpdateInputSchema'
import { LectorRankUncheckedUpdateInputSchema } from '../inputTypeSchemas/LectorRankUncheckedUpdateInputSchema'
import { LectorRankWhereUniqueInputSchema } from '../inputTypeSchemas/LectorRankWhereUniqueInputSchema'
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

export const LectorRankUpdateArgsSchema: z.ZodType<Prisma.LectorRankUpdateArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  data: z.union([ LectorRankUpdateInputSchema,LectorRankUncheckedUpdateInputSchema ]),
  where: LectorRankWhereUniqueInputSchema,
}).strict() ;

export default LectorRankUpdateArgsSchema;
