import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LangSchema } from './LangSchema';

export const NestedEnumLangFilterSchema: z.ZodType<Prisma.NestedEnumLangFilter> = z.object({
  equals: z.lazy(() => LangSchema).optional(),
  in: z.lazy(() => LangSchema).array().optional(),
  notIn: z.lazy(() => LangSchema).array().optional(),
  not: z.union([ z.lazy(() => LangSchema),z.lazy(() => NestedEnumLangFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLangFilterSchema;
