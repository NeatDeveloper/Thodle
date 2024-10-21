import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BuildingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BuildingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BuildingOrderByRelationAggregateInputSchema;
