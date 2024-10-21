import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LangSchema } from './LangSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLangFilterSchema } from './NestedEnumLangFilterSchema';

export const NestedEnumLangWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLangWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LangSchema).optional(),
  in: z.lazy(() => LangSchema).array().optional(),
  notIn: z.lazy(() => LangSchema).array().optional(),
  not: z.union([ z.lazy(() => LangSchema),z.lazy(() => NestedEnumLangWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLangFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLangFilterSchema).optional()
}).strict();

export default NestedEnumLangWithAggregatesFilterSchema;
