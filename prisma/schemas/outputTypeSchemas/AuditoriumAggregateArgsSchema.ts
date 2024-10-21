import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumWhereInputSchema } from '../inputTypeSchemas/AuditoriumWhereInputSchema'
import { AuditoriumOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuditoriumOrderByWithRelationInputSchema'
import { AuditoriumWhereUniqueInputSchema } from '../inputTypeSchemas/AuditoriumWhereUniqueInputSchema'

export const AuditoriumAggregateArgsSchema: z.ZodType<Prisma.AuditoriumAggregateArgs> = z.object({
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithRelationInputSchema.array(),AuditoriumOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditoriumWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AuditoriumAggregateArgsSchema;
