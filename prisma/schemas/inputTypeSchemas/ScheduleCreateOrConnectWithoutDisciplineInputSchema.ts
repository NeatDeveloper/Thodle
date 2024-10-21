import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleWhereUniqueInputSchema } from './ScheduleWhereUniqueInputSchema';
import { ScheduleCreateWithoutDisciplineInputSchema } from './ScheduleCreateWithoutDisciplineInputSchema';
import { ScheduleUncheckedCreateWithoutDisciplineInputSchema } from './ScheduleUncheckedCreateWithoutDisciplineInputSchema';

export const ScheduleCreateOrConnectWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateOrConnectWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema) ]),
}).strict();

export default ScheduleCreateOrConnectWithoutDisciplineInputSchema;
