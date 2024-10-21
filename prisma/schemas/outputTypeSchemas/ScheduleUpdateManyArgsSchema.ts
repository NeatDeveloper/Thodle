import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleUpdateManyMutationInputSchema } from '../inputTypeSchemas/ScheduleUpdateManyMutationInputSchema'
import { ScheduleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ScheduleUncheckedUpdateManyInputSchema'
import { ScheduleWhereInputSchema } from '../inputTypeSchemas/ScheduleWhereInputSchema'

export const ScheduleUpdateManyArgsSchema: z.ZodType<Prisma.ScheduleUpdateManyArgs> = z.object({
  data: z.union([ ScheduleUpdateManyMutationInputSchema,ScheduleUncheckedUpdateManyInputSchema ]),
  where: ScheduleWhereInputSchema.optional(),
}).strict() ;

export default ScheduleUpdateManyArgsSchema;
