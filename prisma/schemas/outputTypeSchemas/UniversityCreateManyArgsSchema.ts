import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityCreateManyInputSchema } from '../inputTypeSchemas/UniversityCreateManyInputSchema'

export const UniversityCreateManyArgsSchema: z.ZodType<Prisma.UniversityCreateManyArgs> = z.object({
  data: z.union([ UniversityCreateManyInputSchema,UniversityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UniversityCreateManyArgsSchema;
