import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadWhereInputSchema } from '../inputTypeSchemas/GroupHeadWhereInputSchema'
import { GroupHeadOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GroupHeadOrderByWithAggregationInputSchema'
import { GroupHeadScalarFieldEnumSchema } from '../inputTypeSchemas/GroupHeadScalarFieldEnumSchema'
import { GroupHeadScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GroupHeadScalarWhereWithAggregatesInputSchema'

export const GroupHeadGroupByArgsSchema: z.ZodType<Prisma.GroupHeadGroupByArgs> = z.object({
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithAggregationInputSchema.array(),GroupHeadOrderByWithAggregationInputSchema ]).optional(),
  by: GroupHeadScalarFieldEnumSchema.array(),
  having: GroupHeadScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GroupHeadGroupByArgsSchema;
