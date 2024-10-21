import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumCreateManyInputSchema } from '../inputTypeSchemas/AuditoriumCreateManyInputSchema'

export const AuditoriumCreateManyArgsSchema: z.ZodType<Prisma.AuditoriumCreateManyArgs> = z.object({
  data: z.union([ AuditoriumCreateManyInputSchema,AuditoriumCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AuditoriumCreateManyArgsSchema;
