import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityCreateManyInputSchema } from '../inputTypeSchemas/FaculityCreateManyInputSchema'

export const FaculityCreateManyArgsSchema: z.ZodType<Prisma.FaculityCreateManyArgs> = z.object({
  data: z.union([ FaculityCreateManyInputSchema,FaculityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default FaculityCreateManyArgsSchema;
