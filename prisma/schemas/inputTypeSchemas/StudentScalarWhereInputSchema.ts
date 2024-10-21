import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const StudentScalarWhereInputSchema: z.ZodType<Prisma.StudentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default StudentScalarWhereInputSchema;
