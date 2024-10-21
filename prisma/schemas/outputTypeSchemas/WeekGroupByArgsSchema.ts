import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekWhereInputSchema } from '../inputTypeSchemas/WeekWhereInputSchema'
import { WeekOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WeekOrderByWithAggregationInputSchema'
import { WeekScalarFieldEnumSchema } from '../inputTypeSchemas/WeekScalarFieldEnumSchema'
import { WeekScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WeekScalarWhereWithAggregatesInputSchema'

export const WeekGroupByArgsSchema: z.ZodType<Prisma.WeekGroupByArgs> = z.object({
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithAggregationInputSchema.array(),WeekOrderByWithAggregationInputSchema ]).optional(),
  by: WeekScalarFieldEnumSchema.array(),
  having: WeekScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WeekGroupByArgsSchema;
