import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleCreateManyDisciplineInputSchema } from './ScheduleCreateManyDisciplineInputSchema';

export const ScheduleCreateManyDisciplineInputEnvelopeSchema: z.ZodType<Prisma.ScheduleCreateManyDisciplineInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ScheduleCreateManyDisciplineInputSchema),z.lazy(() => ScheduleCreateManyDisciplineInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ScheduleCreateManyDisciplineInputEnvelopeSchema;
