import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { NestedEnumGroupHeadLevelWithAggregatesFilterSchema } from './NestedEnumGroupHeadLevelWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumGroupHeadLevelFilterSchema } from './NestedEnumGroupHeadLevelFilterSchema';

export const EnumGroupHeadLevelWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGroupHeadLevelWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GroupHeadLevelSchema).optional(),
  in: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  notIn: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => NestedEnumGroupHeadLevelWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGroupHeadLevelFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGroupHeadLevelFilterSchema).optional()
}).strict();

export default EnumGroupHeadLevelWithAggregatesFilterSchema;
