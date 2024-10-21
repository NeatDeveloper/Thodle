import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankIncludeSchema } from '../inputTypeSchemas/LectorRankIncludeSchema'
import { LectorRankCreateInputSchema } from '../inputTypeSchemas/LectorRankCreateInputSchema'
import { LectorRankUncheckedCreateInputSchema } from '../inputTypeSchemas/LectorRankUncheckedCreateInputSchema'
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

export const LectorRankCreateArgsSchema: z.ZodType<Prisma.LectorRankCreateArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  data: z.union([ LectorRankCreateInputSchema,LectorRankUncheckedCreateInputSchema ]),
}).strict() ;

export default LectorRankCreateArgsSchema;
