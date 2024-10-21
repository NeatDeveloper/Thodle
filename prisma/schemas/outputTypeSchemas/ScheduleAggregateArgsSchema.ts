import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleWhereInputSchema } from '../inputTypeSchemas/ScheduleWhereInputSchema'
import { ScheduleOrderByWithRelationInputSchema } from '../inputTypeSchemas/ScheduleOrderByWithRelationInputSchema'
import { ScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ScheduleWhereUniqueInputSchema'

export const ScheduleAggregateArgsSchema: z.ZodType<Prisma.ScheduleAggregateArgs> = z.object({
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithRelationInputSchema.array(),ScheduleOrderByWithRelationInputSchema ]).optional(),
  cursor: ScheduleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ScheduleAggregateArgsSchema;
