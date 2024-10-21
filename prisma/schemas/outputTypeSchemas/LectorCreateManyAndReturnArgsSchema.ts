import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorCreateManyInputSchema } from '../inputTypeSchemas/LectorCreateManyInputSchema'

export const LectorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LectorCreateManyAndReturnArgs> = z.object({
  data: z.union([ LectorCreateManyInputSchema,LectorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LectorCreateManyAndReturnArgsSchema;
