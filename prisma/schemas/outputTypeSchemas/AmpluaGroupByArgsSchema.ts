import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaWhereInputSchema } from '../inputTypeSchemas/AmpluaWhereInputSchema'
import { AmpluaOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AmpluaOrderByWithAggregationInputSchema'
import { AmpluaScalarFieldEnumSchema } from '../inputTypeSchemas/AmpluaScalarFieldEnumSchema'
import { AmpluaScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AmpluaScalarWhereWithAggregatesInputSchema'

export const AmpluaGroupByArgsSchema: z.ZodType<Prisma.AmpluaGroupByArgs> = z.object({
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithAggregationInputSchema.array(),AmpluaOrderByWithAggregationInputSchema ]).optional(),
  by: AmpluaScalarFieldEnumSchema.array(),
  having: AmpluaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AmpluaGroupByArgsSchema;
