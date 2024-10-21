import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumWeekCountFilterSchema } from './EnumWeekCountFilterSchema';
import { WeekCountSchema } from './WeekCountSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UniversityNullableRelationFilterSchema } from './UniversityNullableRelationFilterSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const WeekWhereInputSchema: z.ZodType<Prisma.WeekWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WeekWhereInputSchema),z.lazy(() => WeekWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekWhereInputSchema),z.lazy(() => WeekWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  University: z.union([ z.lazy(() => UniversityNullableRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional().nullable(),
}).strict();

export default WeekWhereInputSchema;
