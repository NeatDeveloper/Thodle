import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadWhereInputSchema } from '../inputTypeSchemas/GroupHeadWhereInputSchema'
import { GroupHeadOrderByWithRelationInputSchema } from '../inputTypeSchemas/GroupHeadOrderByWithRelationInputSchema'
import { GroupHeadWhereUniqueInputSchema } from '../inputTypeSchemas/GroupHeadWhereUniqueInputSchema'

export const GroupHeadAggregateArgsSchema: z.ZodType<Prisma.GroupHeadAggregateArgs> = z.object({
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithRelationInputSchema.array(),GroupHeadOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupHeadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GroupHeadAggregateArgsSchema;
