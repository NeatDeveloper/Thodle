import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';

export const DisciplineRelationFilterSchema: z.ZodType<Prisma.DisciplineRelationFilter> = z.object({
  is: z.lazy(() => DisciplineWhereInputSchema).optional(),
  isNot: z.lazy(() => DisciplineWhereInputSchema).optional()
}).strict();

export default DisciplineRelationFilterSchema;
