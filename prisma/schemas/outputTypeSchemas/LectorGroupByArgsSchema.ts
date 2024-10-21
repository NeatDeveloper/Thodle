import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorWhereInputSchema } from '../inputTypeSchemas/LectorWhereInputSchema'
import { LectorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LectorOrderByWithAggregationInputSchema'
import { LectorScalarFieldEnumSchema } from '../inputTypeSchemas/LectorScalarFieldEnumSchema'
import { LectorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LectorScalarWhereWithAggregatesInputSchema'

export const LectorGroupByArgsSchema: z.ZodType<Prisma.LectorGroupByArgs> = z.object({
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithAggregationInputSchema.array(),LectorOrderByWithAggregationInputSchema ]).optional(),
  by: LectorScalarFieldEnumSchema.array(),
  having: LectorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LectorGroupByArgsSchema;
