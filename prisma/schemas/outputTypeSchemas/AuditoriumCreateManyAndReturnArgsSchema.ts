import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumCreateManyInputSchema } from '../inputTypeSchemas/AuditoriumCreateManyInputSchema'

export const AuditoriumCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AuditoriumCreateManyAndReturnArgs> = z.object({
  data: z.union([ AuditoriumCreateManyInputSchema,AuditoriumCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AuditoriumCreateManyAndReturnArgsSchema;
