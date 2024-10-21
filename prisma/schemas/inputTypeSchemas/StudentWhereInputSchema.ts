import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { GroupNullableRelationFilterSchema } from './GroupNullableRelationFilterSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const StudentWhereInputSchema: z.ZodType<Prisma.StudentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  Group: z.union([ z.lazy(() => GroupNullableRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional().nullable(),
}).strict();

export default StudentWhereInputSchema;
