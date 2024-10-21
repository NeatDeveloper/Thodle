import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';
import { NestedEnumWeekCountFilterSchema } from './NestedEnumWeekCountFilterSchema';

export const EnumWeekCountFilterSchema: z.ZodType<Prisma.EnumWeekCountFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountFilterSchema) ]).optional(),
}).strict();

export default EnumWeekCountFilterSchema;
