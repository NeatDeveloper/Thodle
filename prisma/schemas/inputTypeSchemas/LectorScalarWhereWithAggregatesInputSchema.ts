import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LectorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LectorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LectorScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LectorScalarWhereWithAggregatesInputSchema;
