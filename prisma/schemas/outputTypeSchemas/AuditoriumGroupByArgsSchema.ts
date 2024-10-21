import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumWhereInputSchema } from '../inputTypeSchemas/AuditoriumWhereInputSchema'
import { AuditoriumOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AuditoriumOrderByWithAggregationInputSchema'
import { AuditoriumScalarFieldEnumSchema } from '../inputTypeSchemas/AuditoriumScalarFieldEnumSchema'
import { AuditoriumScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AuditoriumScalarWhereWithAggregatesInputSchema'

export const AuditoriumGroupByArgsSchema: z.ZodType<Prisma.AuditoriumGroupByArgs> = z.object({
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithAggregationInputSchema.array(),AuditoriumOrderByWithAggregationInputSchema ]).optional(),
  by: AuditoriumScalarFieldEnumSchema.array(),
  having: AuditoriumScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AuditoriumGroupByArgsSchema;
