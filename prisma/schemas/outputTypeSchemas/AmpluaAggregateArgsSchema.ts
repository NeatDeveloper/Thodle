import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaWhereInputSchema } from '../inputTypeSchemas/AmpluaWhereInputSchema'
import { AmpluaOrderByWithRelationInputSchema } from '../inputTypeSchemas/AmpluaOrderByWithRelationInputSchema'
import { AmpluaWhereUniqueInputSchema } from '../inputTypeSchemas/AmpluaWhereUniqueInputSchema'

export const AmpluaAggregateArgsSchema: z.ZodType<Prisma.AmpluaAggregateArgs> = z.object({
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithRelationInputSchema.array(),AmpluaOrderByWithRelationInputSchema ]).optional(),
  cursor: AmpluaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AmpluaAggregateArgsSchema;
