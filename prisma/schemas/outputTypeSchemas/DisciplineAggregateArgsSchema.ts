import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineWhereInputSchema } from '../inputTypeSchemas/DisciplineWhereInputSchema'
import { DisciplineOrderByWithRelationInputSchema } from '../inputTypeSchemas/DisciplineOrderByWithRelationInputSchema'
import { DisciplineWhereUniqueInputSchema } from '../inputTypeSchemas/DisciplineWhereUniqueInputSchema'

export const DisciplineAggregateArgsSchema: z.ZodType<Prisma.DisciplineAggregateArgs> = z.object({
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithRelationInputSchema.array(),DisciplineOrderByWithRelationInputSchema ]).optional(),
  cursor: DisciplineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DisciplineAggregateArgsSchema;
