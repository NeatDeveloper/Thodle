import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankIncludeSchema } from '../inputTypeSchemas/LectorRankIncludeSchema'
import { LectorRankWhereUniqueInputSchema } from '../inputTypeSchemas/LectorRankWhereUniqueInputSchema'
import { LectorRankCreateInputSchema } from '../inputTypeSchemas/LectorRankCreateInputSchema'
import { LectorRankUncheckedCreateInputSchema } from '../inputTypeSchemas/LectorRankUncheckedCreateInputSchema'
import { LectorRankUpdateInputSchema } from '../inputTypeSchemas/LectorRankUpdateInputSchema'
import { LectorRankUncheckedUpdateInputSchema } from '../inputTypeSchemas/LectorRankUncheckedUpdateInputSchema'
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

export const LectorRankUpsertArgsSchema: z.ZodType<Prisma.LectorRankUpsertArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereUniqueInputSchema,
  create: z.union([ LectorRankCreateInputSchema,LectorRankUncheckedCreateInputSchema ]),
  update: z.union([ LectorRankUpdateInputSchema,LectorRankUncheckedUpdateInputSchema ]),
}).strict() ;

export default LectorRankUpsertArgsSchema;
