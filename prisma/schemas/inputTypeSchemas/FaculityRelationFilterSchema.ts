import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const FaculityRelationFilterSchema: z.ZodType<Prisma.FaculityRelationFilter> = z.object({
  is: z.lazy(() => FaculityWhereInputSchema).optional(),
  isNot: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export default FaculityRelationFilterSchema;
