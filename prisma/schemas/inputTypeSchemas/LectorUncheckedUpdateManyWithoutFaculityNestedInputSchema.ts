import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateWithoutFaculityInputSchema } from './LectorCreateWithoutFaculityInputSchema';
import { LectorUncheckedCreateWithoutFaculityInputSchema } from './LectorUncheckedCreateWithoutFaculityInputSchema';
import { LectorCreateOrConnectWithoutFaculityInputSchema } from './LectorCreateOrConnectWithoutFaculityInputSchema';
import { LectorUpsertWithWhereUniqueWithoutFaculityInputSchema } from './LectorUpsertWithWhereUniqueWithoutFaculityInputSchema';
import { LectorCreateManyFaculityInputEnvelopeSchema } from './LectorCreateManyFaculityInputEnvelopeSchema';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorUpdateWithWhereUniqueWithoutFaculityInputSchema } from './LectorUpdateWithWhereUniqueWithoutFaculityInputSchema';
import { LectorUpdateManyWithWhereWithoutFaculityInputSchema } from './LectorUpdateManyWithWhereWithoutFaculityInputSchema';
import { LectorScalarWhereInputSchema } from './LectorScalarWhereInputSchema';

export const LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorCreateWithoutFaculityInputSchema).array(),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LectorUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => LectorUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LectorUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => LectorUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LectorUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => LectorUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema;
