import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupListRelationFilterSchema: z.ZodType<Prisma.GroupListRelationFilter> = z.object({
  every: z.lazy(() => GroupWhereInputSchema).optional(),
  some: z.lazy(() => GroupWhereInputSchema).optional(),
  none: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export default GroupListRelationFilterSchema;
