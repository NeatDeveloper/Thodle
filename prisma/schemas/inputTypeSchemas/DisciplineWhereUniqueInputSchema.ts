import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ScheduleListRelationFilterSchema } from './ScheduleListRelationFilterSchema';
import { FaculityNullableRelationFilterSchema } from './FaculityNullableRelationFilterSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const DisciplineWhereUniqueInputSchema: z.ZodType<Prisma.DisciplineWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => DisciplineWhereInputSchema),z.lazy(() => DisciplineWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineWhereInputSchema),z.lazy(() => DisciplineWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  schedules: z.lazy(() => ScheduleListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
}).strict());

export default DisciplineWhereUniqueInputSchema;
