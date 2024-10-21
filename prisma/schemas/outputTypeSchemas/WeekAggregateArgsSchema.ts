import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekWhereInputSchema } from '../inputTypeSchemas/WeekWhereInputSchema'
import { WeekOrderByWithRelationInputSchema } from '../inputTypeSchemas/WeekOrderByWithRelationInputSchema'
import { WeekWhereUniqueInputSchema } from '../inputTypeSchemas/WeekWhereUniqueInputSchema'

export const WeekAggregateArgsSchema: z.ZodType<Prisma.WeekAggregateArgs> = z.object({
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithRelationInputSchema.array(),WeekOrderByWithRelationInputSchema ]).optional(),
  cursor: WeekWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WeekAggregateArgsSchema;
