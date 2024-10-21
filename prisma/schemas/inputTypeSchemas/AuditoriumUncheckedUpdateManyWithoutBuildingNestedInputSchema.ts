import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumCreateWithoutBuildingInputSchema } from './AuditoriumCreateWithoutBuildingInputSchema';
import { AuditoriumUncheckedCreateWithoutBuildingInputSchema } from './AuditoriumUncheckedCreateWithoutBuildingInputSchema';
import { AuditoriumCreateOrConnectWithoutBuildingInputSchema } from './AuditoriumCreateOrConnectWithoutBuildingInputSchema';
import { AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema } from './AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema';
import { AuditoriumCreateManyBuildingInputEnvelopeSchema } from './AuditoriumCreateManyBuildingInputEnvelopeSchema';
import { AuditoriumWhereUniqueInputSchema } from './AuditoriumWhereUniqueInputSchema';
import { AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema } from './AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema';
import { AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema } from './AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema';
import { AuditoriumScalarWhereInputSchema } from './AuditoriumScalarWhereInputSchema';

export const AuditoriumUncheckedUpdateManyWithoutBuildingNestedInputSchema: z.ZodType<Prisma.AuditoriumUncheckedUpdateManyWithoutBuildingNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema).array(),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditoriumCreateManyBuildingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AuditoriumUncheckedUpdateManyWithoutBuildingNestedInputSchema;
