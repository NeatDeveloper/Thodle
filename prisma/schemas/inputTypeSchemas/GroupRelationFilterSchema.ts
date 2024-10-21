import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupRelationFilterSchema: z.ZodType<Prisma.GroupRelationFilter> = z.object({
  is: z.lazy(() => GroupWhereInputSchema).optional(),
  isNot: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export default GroupRelationFilterSchema;
