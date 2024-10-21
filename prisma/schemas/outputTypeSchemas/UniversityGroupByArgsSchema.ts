import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityWhereInputSchema } from '../inputTypeSchemas/UniversityWhereInputSchema'
import { UniversityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UniversityOrderByWithAggregationInputSchema'
import { UniversityScalarFieldEnumSchema } from '../inputTypeSchemas/UniversityScalarFieldEnumSchema'
import { UniversityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UniversityScalarWhereWithAggregatesInputSchema'

export const UniversityGroupByArgsSchema: z.ZodType<Prisma.UniversityGroupByArgs> = z.object({
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithAggregationInputSchema.array(),UniversityOrderByWithAggregationInputSchema ]).optional(),
  by: UniversityScalarFieldEnumSchema.array(),
  having: UniversityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UniversityGroupByArgsSchema;
