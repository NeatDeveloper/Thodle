import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankCreateManyInputSchema } from '../inputTypeSchemas/LectorRankCreateManyInputSchema'

export const LectorRankCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LectorRankCreateManyAndReturnArgs> = z.object({
  data: z.union([ LectorRankCreateManyInputSchema,LectorRankCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LectorRankCreateManyAndReturnArgsSchema;
