import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekWhereInputSchema } from './WeekWhereInputSchema';

export const WeekListRelationFilterSchema: z.ZodType<Prisma.WeekListRelationFilter> = z.object({
  every: z.lazy(() => WeekWhereInputSchema).optional(),
  some: z.lazy(() => WeekWhereInputSchema).optional(),
  none: z.lazy(() => WeekWhereInputSchema).optional()
}).strict();

export default WeekListRelationFilterSchema;
