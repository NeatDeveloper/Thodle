import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const UniversityNullableRelationFilterSchema: z.ZodType<Prisma.UniversityNullableRelationFilter> = z.object({
  is: z.lazy(() => UniversityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UniversityWhereInputSchema).optional().nullable()
}).strict();

export default UniversityNullableRelationFilterSchema;
