import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentUpdateManyMutationInputSchema } from '../inputTypeSchemas/StudentUpdateManyMutationInputSchema'
import { StudentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StudentUncheckedUpdateManyInputSchema'
import { StudentWhereInputSchema } from '../inputTypeSchemas/StudentWhereInputSchema'

export const StudentUpdateManyArgsSchema: z.ZodType<Prisma.StudentUpdateManyArgs> = z.object({
  data: z.union([ StudentUpdateManyMutationInputSchema,StudentUncheckedUpdateManyInputSchema ]),
  where: StudentWhereInputSchema.optional(),
}).strict() ;

export default StudentUpdateManyArgsSchema;
