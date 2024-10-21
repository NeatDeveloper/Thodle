import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityCreateManyInputSchema } from '../inputTypeSchemas/FaculityCreateManyInputSchema'

export const FaculityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FaculityCreateManyAndReturnArgs> = z.object({
  data: z.union([ FaculityCreateManyInputSchema,FaculityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default FaculityCreateManyAndReturnArgsSchema;
