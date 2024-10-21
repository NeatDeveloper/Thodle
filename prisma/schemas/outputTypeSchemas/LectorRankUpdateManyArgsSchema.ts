import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankUpdateManyMutationInputSchema } from '../inputTypeSchemas/LectorRankUpdateManyMutationInputSchema'
import { LectorRankUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LectorRankUncheckedUpdateManyInputSchema'
import { LectorRankWhereInputSchema } from '../inputTypeSchemas/LectorRankWhereInputSchema'

export const LectorRankUpdateManyArgsSchema: z.ZodType<Prisma.LectorRankUpdateManyArgs> = z.object({
  data: z.union([ LectorRankUpdateManyMutationInputSchema,LectorRankUncheckedUpdateManyInputSchema ]),
  where: LectorRankWhereInputSchema.optional(),
}).strict() ;

export default LectorRankUpdateManyArgsSchema;
