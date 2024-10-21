import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';

export const GroupHeadListRelationFilterSchema: z.ZodType<Prisma.GroupHeadListRelationFilter> = z.object({
  every: z.lazy(() => GroupHeadWhereInputSchema).optional(),
  some: z.lazy(() => GroupHeadWhereInputSchema).optional(),
  none: z.lazy(() => GroupHeadWhereInputSchema).optional()
}).strict();

export default GroupHeadListRelationFilterSchema;
