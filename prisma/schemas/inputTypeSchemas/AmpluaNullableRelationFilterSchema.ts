import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaNullableRelationFilterSchema: z.ZodType<Prisma.AmpluaNullableRelationFilter> = z.object({
  is: z.lazy(() => AmpluaWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AmpluaWhereInputSchema).optional().nullable()
}).strict();

export default AmpluaNullableRelationFilterSchema;
