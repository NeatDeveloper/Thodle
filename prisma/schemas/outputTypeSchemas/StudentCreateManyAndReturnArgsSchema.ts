import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateManyInputSchema } from '../inputTypeSchemas/StudentCreateManyInputSchema'

export const StudentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StudentCreateManyAndReturnArgs> = z.object({
  data: z.union([ StudentCreateManyInputSchema,StudentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default StudentCreateManyAndReturnArgsSchema;
