import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupNullableRelationFilterSchema: z.ZodType<Prisma.GroupNullableRelationFilter> = z.object({
  is: z.lazy(() => GroupWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GroupWhereInputSchema).optional().nullable()
}).strict();

export default GroupNullableRelationFilterSchema;
