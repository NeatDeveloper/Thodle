import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleWhereInputSchema } from '../inputTypeSchemas/ScheduleWhereInputSchema'

export const ScheduleDeleteManyArgsSchema: z.ZodType<Prisma.ScheduleDeleteManyArgs> = z.object({
  where: ScheduleWhereInputSchema.optional(),
}).strict() ;

export default ScheduleDeleteManyArgsSchema;
