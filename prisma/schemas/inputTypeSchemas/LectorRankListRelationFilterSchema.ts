import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankWhereInputSchema } from './LectorRankWhereInputSchema';

export const LectorRankListRelationFilterSchema: z.ZodType<Prisma.LectorRankListRelationFilter> = z.object({
  every: z.lazy(() => LectorRankWhereInputSchema).optional(),
  some: z.lazy(() => LectorRankWhereInputSchema).optional(),
  none: z.lazy(() => LectorRankWhereInputSchema).optional()
}).strict();

export default LectorRankListRelationFilterSchema;
