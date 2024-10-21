import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingWhereInputSchema } from '../inputTypeSchemas/BuildingWhereInputSchema'
import { BuildingOrderByWithRelationInputSchema } from '../inputTypeSchemas/BuildingOrderByWithRelationInputSchema'
import { BuildingWhereUniqueInputSchema } from '../inputTypeSchemas/BuildingWhereUniqueInputSchema'

export const BuildingAggregateArgsSchema: z.ZodType<Prisma.BuildingAggregateArgs> = z.object({
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithRelationInputSchema.array(),BuildingOrderByWithRelationInputSchema ]).optional(),
  cursor: BuildingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BuildingAggregateArgsSchema;
