import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleCreateWithoutDisciplineInputSchema } from './ScheduleCreateWithoutDisciplineInputSchema';
import { ScheduleUncheckedCreateWithoutDisciplineInputSchema } from './ScheduleUncheckedCreateWithoutDisciplineInputSchema';
import { ScheduleCreateOrConnectWithoutDisciplineInputSchema } from './ScheduleCreateOrConnectWithoutDisciplineInputSchema';
import { ScheduleCreateManyDisciplineInputEnvelopeSchema } from './ScheduleCreateManyDisciplineInputEnvelopeSchema';
import { ScheduleWhereUniqueInputSchema } from './ScheduleWhereUniqueInputSchema';

export const ScheduleCreateNestedManyWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateNestedManyWithoutDisciplineInput> = z.object({
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema).array(),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ScheduleCreateManyDisciplineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ScheduleCreateNestedManyWithoutDisciplineInputSchema;
