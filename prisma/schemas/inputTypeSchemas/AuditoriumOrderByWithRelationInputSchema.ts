import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BuildingOrderByWithRelationInputSchema } from './BuildingOrderByWithRelationInputSchema';
import { AuditoriumOrderByRelevanceInputSchema } from './AuditoriumOrderByRelevanceInputSchema';

export const AuditoriumOrderByWithRelationInputSchema: z.ZodType<Prisma.AuditoriumOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Building: z.lazy(() => BuildingOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AuditoriumOrderByRelevanceInputSchema).optional()
}).strict();

export default AuditoriumOrderByWithRelationInputSchema;
