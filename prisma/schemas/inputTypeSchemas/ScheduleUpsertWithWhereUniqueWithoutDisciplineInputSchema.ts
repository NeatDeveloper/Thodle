import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleWhereUniqueInputSchema } from './ScheduleWhereUniqueInputSchema';
import { ScheduleUpdateWithoutDisciplineInputSchema } from './ScheduleUpdateWithoutDisciplineInputSchema';
import { ScheduleUncheckedUpdateWithoutDisciplineInputSchema } from './ScheduleUncheckedUpdateWithoutDisciplineInputSchema';
import { ScheduleCreateWithoutDisciplineInputSchema } from './ScheduleCreateWithoutDisciplineInputSchema';
import { ScheduleUncheckedCreateWithoutDisciplineInputSchema } from './ScheduleUncheckedCreateWithoutDisciplineInputSchema';

export const ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpsertWithWhereUniqueWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ScheduleUpdateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedUpdateWithoutDisciplineInputSchema) ]),
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema) ]),
}).strict();

export default ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema;
