import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateWithoutGroupInputSchema } from './StudentUpdateWithoutGroupInputSchema';
import { StudentUncheckedUpdateWithoutGroupInputSchema } from './StudentUncheckedUpdateWithoutGroupInputSchema';

export const StudentUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StudentUpdateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export default StudentUpdateWithWhereUniqueWithoutGroupInputSchema;
