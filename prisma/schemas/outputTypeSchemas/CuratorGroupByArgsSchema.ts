import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorWhereInputSchema } from '../inputTypeSchemas/CuratorWhereInputSchema'
import { CuratorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CuratorOrderByWithAggregationInputSchema'
import { CuratorScalarFieldEnumSchema } from '../inputTypeSchemas/CuratorScalarFieldEnumSchema'
import { CuratorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CuratorScalarWhereWithAggregatesInputSchema'

export const CuratorGroupByArgsSchema: z.ZodType<Prisma.CuratorGroupByArgs> = z.object({
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithAggregationInputSchema.array(),CuratorOrderByWithAggregationInputSchema ]).optional(),
  by: CuratorScalarFieldEnumSchema.array(),
  having: CuratorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CuratorGroupByArgsSchema;
