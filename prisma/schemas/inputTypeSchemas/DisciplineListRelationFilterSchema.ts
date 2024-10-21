import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';

export const DisciplineListRelationFilterSchema: z.ZodType<Prisma.DisciplineListRelationFilter> = z.object({
  every: z.lazy(() => DisciplineWhereInputSchema).optional(),
  some: z.lazy(() => DisciplineWhereInputSchema).optional(),
  none: z.lazy(() => DisciplineWhereInputSchema).optional()
}).strict();

export default DisciplineListRelationFilterSchema;
