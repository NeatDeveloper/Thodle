import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateManyInputSchema } from '../inputTypeSchemas/StudentCreateManyInputSchema'

export const StudentCreateManyArgsSchema: z.ZodType<Prisma.StudentCreateManyArgs> = z.object({
  data: z.union([ StudentCreateManyInputSchema,StudentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default StudentCreateManyArgsSchema;
