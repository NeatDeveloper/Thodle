import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingCreateWithoutUniversityInputSchema } from './BuildingCreateWithoutUniversityInputSchema';
import { BuildingUncheckedCreateWithoutUniversityInputSchema } from './BuildingUncheckedCreateWithoutUniversityInputSchema';
import { BuildingCreateOrConnectWithoutUniversityInputSchema } from './BuildingCreateOrConnectWithoutUniversityInputSchema';
import { BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema } from './BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema';
import { BuildingCreateManyUniversityInputEnvelopeSchema } from './BuildingCreateManyUniversityInputEnvelopeSchema';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';
import { BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema } from './BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema';
import { BuildingUpdateManyWithWhereWithoutUniversityInputSchema } from './BuildingUpdateManyWithWhereWithoutUniversityInputSchema';
import { BuildingScalarWhereInputSchema } from './BuildingScalarWhereInputSchema';

export const BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingCreateWithoutUniversityInputSchema).array(),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuildingCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BuildingUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => BuildingUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema;
