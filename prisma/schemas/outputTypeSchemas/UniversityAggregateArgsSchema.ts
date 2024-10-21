import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityWhereInputSchema } from '../inputTypeSchemas/UniversityWhereInputSchema'
import { UniversityOrderByWithRelationInputSchema } from '../inputTypeSchemas/UniversityOrderByWithRelationInputSchema'
import { UniversityWhereUniqueInputSchema } from '../inputTypeSchemas/UniversityWhereUniqueInputSchema'

export const UniversityAggregateArgsSchema: z.ZodType<Prisma.UniversityAggregateArgs> = z.object({
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithRelationInputSchema.array(),UniversityOrderByWithRelationInputSchema ]).optional(),
  cursor: UniversityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UniversityAggregateArgsSchema;
