import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereInputSchema } from './BuildingWhereInputSchema';

export const BuildingRelationFilterSchema: z.ZodType<Prisma.BuildingRelationFilter> = z.object({
  is: z.lazy(() => BuildingWhereInputSchema).optional(),
  isNot: z.lazy(() => BuildingWhereInputSchema).optional()
}).strict();

export default BuildingRelationFilterSchema;
