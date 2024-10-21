import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleScalarWhereInputSchema } from './ScheduleScalarWhereInputSchema';
import { ScheduleUpdateManyMutationInputSchema } from './ScheduleUpdateManyMutationInputSchema';
import { ScheduleUncheckedUpdateManyWithoutDisciplineInputSchema } from './ScheduleUncheckedUpdateManyWithoutDisciplineInputSchema';

export const ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpdateManyWithWhereWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ScheduleUpdateManyMutationInputSchema),z.lazy(() => ScheduleUncheckedUpdateManyWithoutDisciplineInputSchema) ]),
}).strict();

export default ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema;
