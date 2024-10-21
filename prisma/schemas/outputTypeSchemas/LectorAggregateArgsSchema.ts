import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorWhereInputSchema } from '../inputTypeSchemas/LectorWhereInputSchema'
import { LectorOrderByWithRelationInputSchema } from '../inputTypeSchemas/LectorOrderByWithRelationInputSchema'
import { LectorWhereUniqueInputSchema } from '../inputTypeSchemas/LectorWhereUniqueInputSchema'

export const LectorAggregateArgsSchema: z.ZodType<Prisma.LectorAggregateArgs> = z.object({
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithRelationInputSchema.array(),LectorOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LectorAggregateArgsSchema;
