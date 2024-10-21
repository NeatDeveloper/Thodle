import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';

export const NestedEnumWeekCountFilterSchema: z.ZodType<Prisma.NestedEnumWeekCountFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountFilterSchema) ]).optional(),
}).strict();

export default NestedEnumWeekCountFilterSchema;
