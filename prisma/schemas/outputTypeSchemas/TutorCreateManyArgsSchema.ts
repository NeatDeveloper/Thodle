import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorCreateManyInputSchema } from '../inputTypeSchemas/TutorCreateManyInputSchema'

export const TutorCreateManyArgsSchema: z.ZodType<Prisma.TutorCreateManyArgs> = z.object({
  data: z.union([ TutorCreateManyInputSchema,TutorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TutorCreateManyArgsSchema;
