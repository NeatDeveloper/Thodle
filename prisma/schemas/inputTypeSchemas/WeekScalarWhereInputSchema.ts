import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumWeekCountFilterSchema } from './EnumWeekCountFilterSchema';
import { WeekCountSchema } from './WeekCountSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WeekScalarWhereInputSchema: z.ZodType<Prisma.WeekScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WeekScalarWhereInputSchema;
