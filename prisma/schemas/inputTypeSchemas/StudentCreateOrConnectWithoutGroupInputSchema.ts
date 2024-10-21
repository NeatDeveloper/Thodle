import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentCreateWithoutGroupInputSchema } from './StudentCreateWithoutGroupInputSchema';
import { StudentUncheckedCreateWithoutGroupInputSchema } from './StudentUncheckedCreateWithoutGroupInputSchema';

export const StudentCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export default StudentCreateOrConnectWithoutGroupInputSchema;
