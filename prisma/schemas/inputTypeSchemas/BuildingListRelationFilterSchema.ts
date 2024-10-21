import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereInputSchema } from './BuildingWhereInputSchema';

export const BuildingListRelationFilterSchema: z.ZodType<Prisma.BuildingListRelationFilter> = z.object({
  every: z.lazy(() => BuildingWhereInputSchema).optional(),
  some: z.lazy(() => BuildingWhereInputSchema).optional(),
  none: z.lazy(() => BuildingWhereInputSchema).optional()
}).strict();

export default BuildingListRelationFilterSchema;
