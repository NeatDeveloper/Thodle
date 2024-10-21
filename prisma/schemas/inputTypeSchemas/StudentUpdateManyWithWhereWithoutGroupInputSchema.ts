import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentScalarWhereInputSchema } from './StudentScalarWhereInputSchema';
import { StudentUpdateManyMutationInputSchema } from './StudentUpdateManyMutationInputSchema';
import { StudentUncheckedUpdateManyWithoutGroupInputSchema } from './StudentUncheckedUpdateManyWithoutGroupInputSchema';

export const StudentUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StudentUpdateManyMutationInputSchema),z.lazy(() => StudentUncheckedUpdateManyWithoutGroupInputSchema) ]),
}).strict();

export default StudentUpdateManyWithWhereWithoutGroupInputSchema;
