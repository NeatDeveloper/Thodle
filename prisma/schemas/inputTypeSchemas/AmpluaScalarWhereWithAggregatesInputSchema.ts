import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';
import { EnumAmpluaEnumNullableListFilterSchema } from './EnumAmpluaEnumNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AmpluaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AmpluaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema),z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema),z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  amplua: z.lazy(() => EnumAmpluaEnumNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AmpluaScalarWhereWithAggregatesInputSchema;
