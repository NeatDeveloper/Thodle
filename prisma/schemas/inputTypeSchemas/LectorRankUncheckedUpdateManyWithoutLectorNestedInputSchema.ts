import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankCreateWithoutLectorInputSchema } from './LectorRankCreateWithoutLectorInputSchema';
import { LectorRankUncheckedCreateWithoutLectorInputSchema } from './LectorRankUncheckedCreateWithoutLectorInputSchema';
import { LectorRankCreateOrConnectWithoutLectorInputSchema } from './LectorRankCreateOrConnectWithoutLectorInputSchema';
import { LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema } from './LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema';
import { LectorRankCreateManyLectorInputEnvelopeSchema } from './LectorRankCreateManyLectorInputEnvelopeSchema';
import { LectorRankWhereUniqueInputSchema } from './LectorRankWhereUniqueInputSchema';
import { LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema } from './LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema';
import { LectorRankUpdateManyWithWhereWithoutLectorInputSchema } from './LectorRankUpdateManyWithWhereWithoutLectorInputSchema';
import { LectorRankScalarWhereInputSchema } from './LectorRankScalarWhereInputSchema';

export const LectorRankUncheckedUpdateManyWithoutLectorNestedInputSchema: z.ZodType<Prisma.LectorRankUncheckedUpdateManyWithoutLectorNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankCreateWithoutLectorInputSchema).array(),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema),z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema),z.lazy(() => LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorRankCreateManyLectorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema),z.lazy(() => LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LectorRankUpdateManyWithWhereWithoutLectorInputSchema),z.lazy(() => LectorRankUpdateManyWithWhereWithoutLectorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LectorRankUncheckedUpdateManyWithoutLectorNestedInputSchema;
