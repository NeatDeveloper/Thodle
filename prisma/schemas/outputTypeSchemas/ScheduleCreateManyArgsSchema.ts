import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleCreateManyInputSchema } from '../inputTypeSchemas/ScheduleCreateManyInputSchema'

export const ScheduleCreateManyArgsSchema: z.ZodType<Prisma.ScheduleCreateManyArgs> = z.object({
  data: z.union([ ScheduleCreateManyInputSchema,ScheduleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ScheduleCreateManyArgsSchema;
