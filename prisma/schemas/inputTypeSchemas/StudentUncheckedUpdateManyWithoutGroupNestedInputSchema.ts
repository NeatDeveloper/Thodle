import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentCreateWithoutGroupInputSchema } from './StudentCreateWithoutGroupInputSchema';
import { StudentUncheckedCreateWithoutGroupInputSchema } from './StudentUncheckedCreateWithoutGroupInputSchema';
import { StudentCreateOrConnectWithoutGroupInputSchema } from './StudentCreateOrConnectWithoutGroupInputSchema';
import { StudentUpsertWithWhereUniqueWithoutGroupInputSchema } from './StudentUpsertWithWhereUniqueWithoutGroupInputSchema';
import { StudentCreateManyGroupInputEnvelopeSchema } from './StudentCreateManyGroupInputEnvelopeSchema';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateWithWhereUniqueWithoutGroupInputSchema } from './StudentUpdateWithWhereUniqueWithoutGroupInputSchema';
import { StudentUpdateManyWithWhereWithoutGroupInputSchema } from './StudentUpdateManyWithWhereWithoutGroupInputSchema';
import { StudentScalarWhereInputSchema } from './StudentScalarWhereInputSchema';

export const StudentUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentCreateWithoutGroupInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StudentUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StudentUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StudentUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StudentUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StudentUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => StudentUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default StudentUncheckedUpdateManyWithoutGroupNestedInputSchema;
