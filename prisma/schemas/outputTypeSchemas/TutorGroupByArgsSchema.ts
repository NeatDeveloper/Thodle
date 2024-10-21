import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorWhereInputSchema } from '../inputTypeSchemas/TutorWhereInputSchema'
import { TutorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TutorOrderByWithAggregationInputSchema'
import { TutorScalarFieldEnumSchema } from '../inputTypeSchemas/TutorScalarFieldEnumSchema'
import { TutorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TutorScalarWhereWithAggregatesInputSchema'

export const TutorGroupByArgsSchema: z.ZodType<Prisma.TutorGroupByArgs> = z.object({
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithAggregationInputSchema.array(),TutorOrderByWithAggregationInputSchema ]).optional(),
  by: TutorScalarFieldEnumSchema.array(),
  having: TutorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TutorGroupByArgsSchema;
