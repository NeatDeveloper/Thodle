import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AuditoriumOrderByRelationAggregateInputSchema } from './AuditoriumOrderByRelationAggregateInputSchema';
import { UniversityOrderByWithRelationInputSchema } from './UniversityOrderByWithRelationInputSchema';
import { BuildingOrderByRelevanceInputSchema } from './BuildingOrderByRelevanceInputSchema';

export const BuildingOrderByWithRelationInputSchema: z.ZodType<Prisma.BuildingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  auditoriums: z.lazy(() => AuditoriumOrderByRelationAggregateInputSchema).optional(),
  University: z.lazy(() => UniversityOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => BuildingOrderByRelevanceInputSchema).optional()
}).strict();

export default BuildingOrderByWithRelationInputSchema;
