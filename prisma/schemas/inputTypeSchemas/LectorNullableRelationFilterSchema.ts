import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorNullableRelationFilterSchema: z.ZodType<Prisma.LectorNullableRelationFilter> = z.object({
  is: z.lazy(() => LectorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LectorWhereInputSchema).optional().nullable()
}).strict();

export default LectorNullableRelationFilterSchema;
