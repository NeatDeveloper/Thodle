import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankWhereInputSchema } from '../inputTypeSchemas/LectorRankWhereInputSchema'
import { LectorRankOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LectorRankOrderByWithAggregationInputSchema'
import { LectorRankScalarFieldEnumSchema } from '../inputTypeSchemas/LectorRankScalarFieldEnumSchema'
import { LectorRankScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LectorRankScalarWhereWithAggregatesInputSchema'

export const LectorRankGroupByArgsSchema: z.ZodType<Prisma.LectorRankGroupByArgs> = z.object({
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithAggregationInputSchema.array(),LectorRankOrderByWithAggregationInputSchema ]).optional(),
  by: LectorRankScalarFieldEnumSchema.array(),
  having: LectorRankScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LectorRankGroupByArgsSchema;
