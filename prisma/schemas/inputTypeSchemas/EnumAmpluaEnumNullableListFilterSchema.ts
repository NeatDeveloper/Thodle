import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';

export const EnumAmpluaEnumNullableListFilterSchema: z.ZodType<Prisma.EnumAmpluaEnumNullableListFilter> = z.object({
  equals: z.lazy(() => AmpluaEnumSchema).array().optional().nullable(),
  has: z.lazy(() => AmpluaEnumSchema).optional().nullable(),
  hasEvery: z.lazy(() => AmpluaEnumSchema).array().optional(),
  hasSome: z.lazy(() => AmpluaEnumSchema).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export default EnumAmpluaEnumNullableListFilterSchema;
