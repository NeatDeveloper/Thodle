import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumWhereInputSchema } from './AuditoriumWhereInputSchema';

export const AuditoriumListRelationFilterSchema: z.ZodType<Prisma.AuditoriumListRelationFilter> = z.object({
  every: z.lazy(() => AuditoriumWhereInputSchema).optional(),
  some: z.lazy(() => AuditoriumWhereInputSchema).optional(),
  none: z.lazy(() => AuditoriumWhereInputSchema).optional()
}).strict();

export default AuditoriumListRelationFilterSchema;
