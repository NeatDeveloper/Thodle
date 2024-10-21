import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorWhereInputSchema } from '../inputTypeSchemas/TutorWhereInputSchema'
import { TutorOrderByWithRelationInputSchema } from '../inputTypeSchemas/TutorOrderByWithRelationInputSchema'
import { TutorWhereUniqueInputSchema } from '../inputTypeSchemas/TutorWhereUniqueInputSchema'

export const TutorAggregateArgsSchema: z.ZodType<Prisma.TutorAggregateArgs> = z.object({
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithRelationInputSchema.array(),TutorOrderByWithRelationInputSchema ]).optional(),
  cursor: TutorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TutorAggregateArgsSchema;
