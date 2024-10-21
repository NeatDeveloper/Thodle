import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';

export const GroupHeadNullableRelationFilterSchema: z.ZodType<Prisma.GroupHeadNullableRelationFilter> = z.object({
  is: z.lazy(() => GroupHeadWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GroupHeadWhereInputSchema).optional().nullable()
}).strict();

export default GroupHeadNullableRelationFilterSchema;
