import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineWhereInputSchema } from '../inputTypeSchemas/DisciplineWhereInputSchema'
import { DisciplineOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DisciplineOrderByWithAggregationInputSchema'
import { DisciplineScalarFieldEnumSchema } from '../inputTypeSchemas/DisciplineScalarFieldEnumSchema'
import { DisciplineScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DisciplineScalarWhereWithAggregatesInputSchema'

export const DisciplineGroupByArgsSchema: z.ZodType<Prisma.DisciplineGroupByArgs> = z.object({
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithAggregationInputSchema.array(),DisciplineOrderByWithAggregationInputSchema ]).optional(),
  by: DisciplineScalarFieldEnumSchema.array(),
  having: DisciplineScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DisciplineGroupByArgsSchema;
