import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleWhereUniqueInputSchema } from './ScheduleWhereUniqueInputSchema';
import { ScheduleUpdateWithoutDisciplineInputSchema } from './ScheduleUpdateWithoutDisciplineInputSchema';
import { ScheduleUncheckedUpdateWithoutDisciplineInputSchema } from './ScheduleUncheckedUpdateWithoutDisciplineInputSchema';

export const ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpdateWithWhereUniqueWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ScheduleUpdateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedUpdateWithoutDisciplineInputSchema) ]),
}).strict();

export default ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema;
