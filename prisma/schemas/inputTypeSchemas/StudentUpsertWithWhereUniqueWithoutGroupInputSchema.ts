import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateWithoutGroupInputSchema } from './StudentUpdateWithoutGroupInputSchema';
import { StudentUncheckedUpdateWithoutGroupInputSchema } from './StudentUncheckedUpdateWithoutGroupInputSchema';
import { StudentCreateWithoutGroupInputSchema } from './StudentCreateWithoutGroupInputSchema';
import { StudentUncheckedCreateWithoutGroupInputSchema } from './StudentUncheckedCreateWithoutGroupInputSchema';

export const StudentUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StudentUpdateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export default StudentUpsertWithWhereUniqueWithoutGroupInputSchema;
