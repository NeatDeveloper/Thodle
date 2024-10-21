import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WeekOrderByRelationAggregateInputSchema } from './WeekOrderByRelationAggregateInputSchema';
import { FaculityOrderByRelationAggregateInputSchema } from './FaculityOrderByRelationAggregateInputSchema';
import { BuildingOrderByRelationAggregateInputSchema } from './BuildingOrderByRelationAggregateInputSchema';
import { UniversityOrderByRelevanceInputSchema } from './UniversityOrderByRelevanceInputSchema';

export const UniversityOrderByWithRelationInputSchema: z.ZodType<Prisma.UniversityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  studyTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weeks: z.lazy(() => WeekOrderByRelationAggregateInputSchema).optional(),
  faculties: z.lazy(() => FaculityOrderByRelationAggregateInputSchema).optional(),
  buildings: z.lazy(() => BuildingOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => UniversityOrderByRelevanceInputSchema).optional()
}).strict();

export default UniversityOrderByWithRelationInputSchema;
