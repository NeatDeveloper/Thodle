import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingOrderByRelevanceFieldEnumSchema } from './BuildingOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const BuildingOrderByRelevanceInputSchema: z.ZodType<Prisma.BuildingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BuildingOrderByRelevanceFieldEnumSchema),z.lazy(() => BuildingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default BuildingOrderByRelevanceInputSchema;
