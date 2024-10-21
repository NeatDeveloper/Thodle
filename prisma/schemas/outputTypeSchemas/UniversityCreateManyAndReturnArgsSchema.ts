import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityCreateManyInputSchema } from '../inputTypeSchemas/UniversityCreateManyInputSchema'

export const UniversityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UniversityCreateManyAndReturnArgs> = z.object({
  data: z.union([ UniversityCreateManyInputSchema,UniversityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UniversityCreateManyAndReturnArgsSchema;
