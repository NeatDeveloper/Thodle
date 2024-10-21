import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorCreateManyInputSchema } from '../inputTypeSchemas/LectorCreateManyInputSchema'

export const LectorCreateManyArgsSchema: z.ZodType<Prisma.LectorCreateManyArgs> = z.object({
  data: z.union([ LectorCreateManyInputSchema,LectorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LectorCreateManyArgsSchema;
