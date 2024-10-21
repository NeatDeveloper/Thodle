import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingWhereInputSchema } from '../inputTypeSchemas/BuildingWhereInputSchema'
import { BuildingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BuildingOrderByWithAggregationInputSchema'
import { BuildingScalarFieldEnumSchema } from '../inputTypeSchemas/BuildingScalarFieldEnumSchema'
import { BuildingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BuildingScalarWhereWithAggregatesInputSchema'

export const BuildingGroupByArgsSchema: z.ZodType<Prisma.BuildingGroupByArgs> = z.object({
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithAggregationInputSchema.array(),BuildingOrderByWithAggregationInputSchema ]).optional(),
  by: BuildingScalarFieldEnumSchema.array(),
  having: BuildingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BuildingGroupByArgsSchema;
