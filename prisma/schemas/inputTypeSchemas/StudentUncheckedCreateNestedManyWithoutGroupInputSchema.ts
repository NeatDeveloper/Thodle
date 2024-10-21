import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentCreateWithoutGroupInputSchema } from './StudentCreateWithoutGroupInputSchema';
import { StudentUncheckedCreateWithoutGroupInputSchema } from './StudentUncheckedCreateWithoutGroupInputSchema';
import { StudentCreateOrConnectWithoutGroupInputSchema } from './StudentCreateOrConnectWithoutGroupInputSchema';
import { StudentCreateManyGroupInputEnvelopeSchema } from './StudentCreateManyGroupInputEnvelopeSchema';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';

export const StudentUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentCreateWithoutGroupInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default StudentUncheckedCreateNestedManyWithoutGroupInputSchema;
