import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupWhereInputSchema } from '../inputTypeSchemas/GroupWhereInputSchema'
import { GroupOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GroupOrderByWithAggregationInputSchema'
import { GroupScalarFieldEnumSchema } from '../inputTypeSchemas/GroupScalarFieldEnumSchema'
import { GroupScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GroupScalarWhereWithAggregatesInputSchema'

export const GroupGroupByArgsSchema: z.ZodType<Prisma.GroupGroupByArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithAggregationInputSchema.array(),GroupOrderByWithAggregationInputSchema ]).optional(),
  by: GroupScalarFieldEnumSchema.array(),
  having: GroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GroupGroupByArgsSchema;
