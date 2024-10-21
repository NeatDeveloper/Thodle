import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorListRelationFilterSchema: z.ZodType<Prisma.LectorListRelationFilter> = z.object({
  every: z.lazy(() => LectorWhereInputSchema).optional(),
  some: z.lazy(() => LectorWhereInputSchema).optional(),
  none: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export default LectorListRelationFilterSchema;
