import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleWhereInputSchema } from '../inputTypeSchemas/ScheduleWhereInputSchema'
import { ScheduleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ScheduleOrderByWithAggregationInputSchema'
import { ScheduleScalarFieldEnumSchema } from '../inputTypeSchemas/ScheduleScalarFieldEnumSchema'
import { ScheduleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ScheduleScalarWhereWithAggregatesInputSchema'

export const ScheduleGroupByArgsSchema: z.ZodType<Prisma.ScheduleGroupByArgs> = z.object({
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithAggregationInputSchema.array(),ScheduleOrderByWithAggregationInputSchema ]).optional(),
  by: ScheduleScalarFieldEnumSchema.array(),
  having: ScheduleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ScheduleGroupByArgsSchema;
