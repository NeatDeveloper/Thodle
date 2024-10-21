import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateWithoutFaculityInputSchema } from './DisciplineCreateWithoutFaculityInputSchema';
import { DisciplineUncheckedCreateWithoutFaculityInputSchema } from './DisciplineUncheckedCreateWithoutFaculityInputSchema';
import { DisciplineCreateOrConnectWithoutFaculityInputSchema } from './DisciplineCreateOrConnectWithoutFaculityInputSchema';
import { DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema } from './DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema';
import { DisciplineCreateManyFaculityInputEnvelopeSchema } from './DisciplineCreateManyFaculityInputEnvelopeSchema';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';
import { DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema } from './DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema';
import { DisciplineUpdateManyWithWhereWithoutFaculityInputSchema } from './DisciplineUpdateManyWithWhereWithoutFaculityInputSchema';
import { DisciplineScalarWhereInputSchema } from './DisciplineScalarWhereInputSchema';

export const DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateWithoutFaculityInputSchema).array(),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisciplineCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisciplineUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => DisciplineUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema;
