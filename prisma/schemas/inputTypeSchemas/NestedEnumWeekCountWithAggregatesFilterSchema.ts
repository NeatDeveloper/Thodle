import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumWeekCountFilterSchema } from './NestedEnumWeekCountFilterSchema';

export const NestedEnumWeekCountWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWeekCountWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWeekCountFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWeekCountFilterSchema).optional()
}).strict();

export default NestedEnumWeekCountWithAggregatesFilterSchema;
