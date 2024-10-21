import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';

export const CuratorNullableRelationFilterSchema: z.ZodType<Prisma.CuratorNullableRelationFilter> = z.object({
  is: z.lazy(() => CuratorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CuratorWhereInputSchema).optional().nullable()
}).strict();

export default CuratorNullableRelationFilterSchema;
