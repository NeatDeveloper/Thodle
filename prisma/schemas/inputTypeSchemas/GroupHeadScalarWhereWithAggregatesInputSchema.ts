import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumGroupHeadLevelWithAggregatesFilterSchema } from './EnumGroupHeadLevelWithAggregatesFilterSchema';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const GroupHeadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GroupHeadScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelWithAggregatesFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default GroupHeadScalarWhereWithAggregatesInputSchema;
