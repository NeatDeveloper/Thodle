import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutUniversityInputSchema } from './FaculityCreateWithoutUniversityInputSchema';
import { FaculityUncheckedCreateWithoutUniversityInputSchema } from './FaculityUncheckedCreateWithoutUniversityInputSchema';
import { FaculityCreateOrConnectWithoutUniversityInputSchema } from './FaculityCreateOrConnectWithoutUniversityInputSchema';
import { FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema } from './FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema';
import { FaculityCreateManyUniversityInputEnvelopeSchema } from './FaculityCreateManyUniversityInputEnvelopeSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema } from './FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema';
import { FaculityUpdateManyWithWhereWithoutUniversityInputSchema } from './FaculityUpdateManyWithWhereWithoutUniversityInputSchema';
import { FaculityScalarWhereInputSchema } from './FaculityScalarWhereInputSchema';

export const FaculityUncheckedUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityCreateWithoutUniversityInputSchema).array(),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FaculityCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FaculityUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => FaculityUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default FaculityUncheckedUpdateManyWithoutUniversityNestedInputSchema;
