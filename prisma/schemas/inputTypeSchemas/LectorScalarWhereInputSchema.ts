import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LectorScalarWhereInputSchema: z.ZodType<Prisma.LectorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LectorScalarWhereInputSchema;
