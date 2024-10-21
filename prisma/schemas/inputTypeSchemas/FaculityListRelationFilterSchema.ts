import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const FaculityListRelationFilterSchema: z.ZodType<Prisma.FaculityListRelationFilter> = z.object({
  every: z.lazy(() => FaculityWhereInputSchema).optional(),
  some: z.lazy(() => FaculityWhereInputSchema).optional(),
  none: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export default FaculityListRelationFilterSchema;
