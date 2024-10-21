import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const FaculityNullableRelationFilterSchema: z.ZodType<Prisma.FaculityNullableRelationFilter> = z.object({
  is: z.lazy(() => FaculityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FaculityWhereInputSchema).optional().nullable()
}).strict();

export default FaculityNullableRelationFilterSchema;
