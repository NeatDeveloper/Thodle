import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';

export const NestedEnumGroupHeadLevelFilterSchema: z.ZodType<Prisma.NestedEnumGroupHeadLevelFilter> = z.object({
  equals: z.lazy(() => GroupHeadLevelSchema).optional(),
  in: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  notIn: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => NestedEnumGroupHeadLevelFilterSchema) ]).optional(),
}).strict();

export default NestedEnumGroupHeadLevelFilterSchema;
