import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekUpdateManyMutationInputSchema } from '../inputTypeSchemas/WeekUpdateManyMutationInputSchema'
import { WeekUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WeekUncheckedUpdateManyInputSchema'
import { WeekWhereInputSchema } from '../inputTypeSchemas/WeekWhereInputSchema'

export const WeekUpdateManyArgsSchema: z.ZodType<Prisma.WeekUpdateManyArgs> = z.object({
  data: z.union([ WeekUpdateManyMutationInputSchema,WeekUncheckedUpdateManyInputSchema ]),
  where: WeekWhereInputSchema.optional(),
}).strict() ;

export default WeekUpdateManyArgsSchema;
