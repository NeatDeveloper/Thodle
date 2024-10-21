import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleCreateWithoutDisciplineInputSchema } from './ScheduleCreateWithoutDisciplineInputSchema';
import { ScheduleUncheckedCreateWithoutDisciplineInputSchema } from './ScheduleUncheckedCreateWithoutDisciplineInputSchema';
import { ScheduleCreateOrConnectWithoutDisciplineInputSchema } from './ScheduleCreateOrConnectWithoutDisciplineInputSchema';
import { ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema } from './ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema';
import { ScheduleCreateManyDisciplineInputEnvelopeSchema } from './ScheduleCreateManyDisciplineInputEnvelopeSchema';
import { ScheduleWhereUniqueInputSchema } from './ScheduleWhereUniqueInputSchema';
import { ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema } from './ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema';
import { ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema } from './ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema';
import { ScheduleScalarWhereInputSchema } from './ScheduleScalarWhereInputSchema';

export const ScheduleUncheckedUpdateManyWithoutDisciplineNestedInputSchema: z.ZodType<Prisma.ScheduleUncheckedUpdateManyWithoutDisciplineNestedInput> = z.object({
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema).array(),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ScheduleCreateManyDisciplineInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ScheduleUncheckedUpdateManyWithoutDisciplineNestedInputSchema;
