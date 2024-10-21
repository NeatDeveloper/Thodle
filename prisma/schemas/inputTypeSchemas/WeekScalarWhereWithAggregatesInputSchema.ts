import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumWeekCountWithAggregatesFilterSchema } from './EnumWeekCountWithAggregatesFilterSchema';
import { WeekCountSchema } from './WeekCountSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const WeekScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WeekScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WeekScalarWhereWithAggregatesInputSchema),z.lazy(() => WeekScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekScalarWhereWithAggregatesInputSchema),z.lazy(() => WeekScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountWithAggregatesFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WeekScalarWhereWithAggregatesInputSchema;
