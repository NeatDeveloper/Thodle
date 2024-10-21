import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaRelationFilterSchema: z.ZodType<Prisma.AmpluaRelationFilter> = z.object({
  is: z.lazy(() => AmpluaWhereInputSchema).optional(),
  isNot: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaRelationFilterSchema;
