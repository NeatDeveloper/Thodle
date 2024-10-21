import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityWhereInputSchema } from '../inputTypeSchemas/FaculityWhereInputSchema'
import { FaculityOrderByWithRelationInputSchema } from '../inputTypeSchemas/FaculityOrderByWithRelationInputSchema'
import { FaculityWhereUniqueInputSchema } from '../inputTypeSchemas/FaculityWhereUniqueInputSchema'

export const FaculityAggregateArgsSchema: z.ZodType<Prisma.FaculityAggregateArgs> = z.object({
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithRelationInputSchema.array(),FaculityOrderByWithRelationInputSchema ]).optional(),
  cursor: FaculityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FaculityAggregateArgsSchema;
