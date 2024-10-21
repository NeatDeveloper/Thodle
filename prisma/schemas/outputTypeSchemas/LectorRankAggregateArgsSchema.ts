import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankWhereInputSchema } from '../inputTypeSchemas/LectorRankWhereInputSchema'
import { LectorRankOrderByWithRelationInputSchema } from '../inputTypeSchemas/LectorRankOrderByWithRelationInputSchema'
import { LectorRankWhereUniqueInputSchema } from '../inputTypeSchemas/LectorRankWhereUniqueInputSchema'

export const LectorRankAggregateArgsSchema: z.ZodType<Prisma.LectorRankAggregateArgs> = z.object({
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithRelationInputSchema.array(),LectorRankOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorRankWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LectorRankAggregateArgsSchema;
