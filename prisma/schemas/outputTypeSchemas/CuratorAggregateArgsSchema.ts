import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorWhereInputSchema } from '../inputTypeSchemas/CuratorWhereInputSchema'
import { CuratorOrderByWithRelationInputSchema } from '../inputTypeSchemas/CuratorOrderByWithRelationInputSchema'
import { CuratorWhereUniqueInputSchema } from '../inputTypeSchemas/CuratorWhereUniqueInputSchema'

export const CuratorAggregateArgsSchema: z.ZodType<Prisma.CuratorAggregateArgs> = z.object({
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithRelationInputSchema.array(),CuratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CuratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CuratorAggregateArgsSchema;
