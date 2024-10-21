import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const ScheduleScalarWhereInputSchema: z.ZodType<Prisma.ScheduleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  discipline: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ScheduleScalarWhereInputSchema;
