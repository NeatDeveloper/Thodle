import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankWhereInputSchema } from '../inputTypeSchemas/LectorRankWhereInputSchema'

export const LectorRankDeleteManyArgsSchema: z.ZodType<Prisma.LectorRankDeleteManyArgs> = z.object({
  where: LectorRankWhereInputSchema.optional(),
}).strict() ;

export default LectorRankDeleteManyArgsSchema;
