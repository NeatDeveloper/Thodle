import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityWhereInputSchema } from '../inputTypeSchemas/FaculityWhereInputSchema'
import { FaculityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FaculityOrderByWithAggregationInputSchema'
import { FaculityScalarFieldEnumSchema } from '../inputTypeSchemas/FaculityScalarFieldEnumSchema'
import { FaculityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FaculityScalarWhereWithAggregatesInputSchema'

export const FaculityGroupByArgsSchema: z.ZodType<Prisma.FaculityGroupByArgs> = z.object({
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithAggregationInputSchema.array(),FaculityOrderByWithAggregationInputSchema ]).optional(),
  by: FaculityScalarFieldEnumSchema.array(),
  having: FaculityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FaculityGroupByArgsSchema;
