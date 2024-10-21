import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekCreateManyInputSchema } from '../inputTypeSchemas/WeekCreateManyInputSchema'

export const WeekCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WeekCreateManyAndReturnArgs> = z.object({
  data: z.union([ WeekCreateManyInputSchema,WeekCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WeekCreateManyAndReturnArgsSchema;
