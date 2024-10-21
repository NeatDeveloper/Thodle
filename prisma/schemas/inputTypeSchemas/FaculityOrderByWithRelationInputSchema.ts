import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DisciplineOrderByRelationAggregateInputSchema } from './DisciplineOrderByRelationAggregateInputSchema';
import { LectorOrderByRelationAggregateInputSchema } from './LectorOrderByRelationAggregateInputSchema';
import { GroupOrderByRelationAggregateInputSchema } from './GroupOrderByRelationAggregateInputSchema';
import { UniversityOrderByWithRelationInputSchema } from './UniversityOrderByWithRelationInputSchema';

export const FaculityOrderByWithRelationInputSchema: z.ZodType<Prisma.FaculityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  disciplines: z.lazy(() => DisciplineOrderByRelationAggregateInputSchema).optional(),
  lectors: z.lazy(() => LectorOrderByRelationAggregateInputSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputSchema).optional(),
  University: z.lazy(() => UniversityOrderByWithRelationInputSchema).optional()
}).strict();

export default FaculityOrderByWithRelationInputSchema;
