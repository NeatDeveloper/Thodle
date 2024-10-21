import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ScheduleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ScheduleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema),z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema),z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  discipline: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ScheduleScalarWhereWithAggregatesInputSchema;
