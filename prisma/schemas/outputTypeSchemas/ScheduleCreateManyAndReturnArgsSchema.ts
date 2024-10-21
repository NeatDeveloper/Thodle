import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleCreateManyInputSchema } from '../inputTypeSchemas/ScheduleCreateManyInputSchema'

export const ScheduleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ScheduleCreateManyAndReturnArgs> = z.object({
  data: z.union([ ScheduleCreateManyInputSchema,ScheduleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ScheduleCreateManyAndReturnArgsSchema;
