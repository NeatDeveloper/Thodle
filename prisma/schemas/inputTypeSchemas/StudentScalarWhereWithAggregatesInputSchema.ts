import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const StudentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default StudentScalarWhereWithAggregatesInputSchema;
