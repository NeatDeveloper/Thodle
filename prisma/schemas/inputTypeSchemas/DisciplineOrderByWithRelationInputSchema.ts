import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ScheduleOrderByRelationAggregateInputSchema } from './ScheduleOrderByRelationAggregateInputSchema';
import { FaculityOrderByWithRelationInputSchema } from './FaculityOrderByWithRelationInputSchema';
import { DisciplineOrderByRelevanceInputSchema } from './DisciplineOrderByRelevanceInputSchema';

export const DisciplineOrderByWithRelationInputSchema: z.ZodType<Prisma.DisciplineOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  schedules: z.lazy(() => ScheduleOrderByRelationAggregateInputSchema).optional(),
  Faculity: z.lazy(() => FaculityOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DisciplineOrderByRelevanceInputSchema).optional()
}).strict();

export default DisciplineOrderByWithRelationInputSchema;
