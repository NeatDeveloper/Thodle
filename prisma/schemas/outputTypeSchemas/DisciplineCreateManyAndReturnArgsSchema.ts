import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineCreateManyInputSchema } from '../inputTypeSchemas/DisciplineCreateManyInputSchema'

export const DisciplineCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DisciplineCreateManyAndReturnArgs> = z.object({
  data: z.union([ DisciplineCreateManyInputSchema,DisciplineCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DisciplineCreateManyAndReturnArgsSchema;
