import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorRelationFilterSchema: z.ZodType<Prisma.LectorRelationFilter> = z.object({
  is: z.lazy(() => LectorWhereInputSchema).optional(),
  isNot: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export default LectorRelationFilterSchema;
