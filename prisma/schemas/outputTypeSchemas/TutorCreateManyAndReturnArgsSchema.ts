import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorCreateManyInputSchema } from '../inputTypeSchemas/TutorCreateManyInputSchema'

export const TutorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TutorCreateManyAndReturnArgs> = z.object({
  data: z.union([ TutorCreateManyInputSchema,TutorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TutorCreateManyAndReturnArgsSchema;
