import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaCreateManyInputSchema } from '../inputTypeSchemas/AmpluaCreateManyInputSchema'

export const AmpluaCreateManyArgsSchema: z.ZodType<Prisma.AmpluaCreateManyArgs> = z.object({
  data: z.union([ AmpluaCreateManyInputSchema,AmpluaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AmpluaCreateManyArgsSchema;
