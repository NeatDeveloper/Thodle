import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const UniversityRelationFilterSchema: z.ZodType<Prisma.UniversityRelationFilter> = z.object({
  is: z.lazy(() => UniversityWhereInputSchema).optional(),
  isNot: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export default UniversityRelationFilterSchema;
