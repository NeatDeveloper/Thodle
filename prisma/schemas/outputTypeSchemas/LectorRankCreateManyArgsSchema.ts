import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankCreateManyInputSchema } from '../inputTypeSchemas/LectorRankCreateManyInputSchema'

export const LectorRankCreateManyArgsSchema: z.ZodType<Prisma.LectorRankCreateManyArgs> = z.object({
  data: z.union([ LectorRankCreateManyInputSchema,LectorRankCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LectorRankCreateManyArgsSchema;
