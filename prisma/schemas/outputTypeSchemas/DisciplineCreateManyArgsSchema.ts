import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineCreateManyInputSchema } from '../inputTypeSchemas/DisciplineCreateManyInputSchema'

export const DisciplineCreateManyArgsSchema: z.ZodType<Prisma.DisciplineCreateManyArgs> = z.object({
  data: z.union([ DisciplineCreateManyInputSchema,DisciplineCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DisciplineCreateManyArgsSchema;
