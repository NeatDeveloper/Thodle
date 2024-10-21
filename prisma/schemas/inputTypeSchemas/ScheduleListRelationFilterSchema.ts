import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleWhereInputSchema } from './ScheduleWhereInputSchema';

export const ScheduleListRelationFilterSchema: z.ZodType<Prisma.ScheduleListRelationFilter> = z.object({
  every: z.lazy(() => ScheduleWhereInputSchema).optional(),
  some: z.lazy(() => ScheduleWhereInputSchema).optional(),
  none: z.lazy(() => ScheduleWhereInputSchema).optional()
}).strict();

export default ScheduleListRelationFilterSchema;
