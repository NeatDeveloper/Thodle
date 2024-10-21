import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupWhereInputSchema } from '../inputTypeSchemas/GroupWhereInputSchema'
import { GroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/GroupOrderByWithRelationInputSchema'
import { GroupWhereUniqueInputSchema } from '../inputTypeSchemas/GroupWhereUniqueInputSchema'

export const GroupAggregateArgsSchema: z.ZodType<Prisma.GroupAggregateArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GroupAggregateArgsSchema;
