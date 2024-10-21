import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { StudentCountOrderByAggregateInputSchema } from './StudentCountOrderByAggregateInputSchema';
import { StudentAvgOrderByAggregateInputSchema } from './StudentAvgOrderByAggregateInputSchema';
import { StudentMaxOrderByAggregateInputSchema } from './StudentMaxOrderByAggregateInputSchema';
import { StudentMinOrderByAggregateInputSchema } from './StudentMinOrderByAggregateInputSchema';
import { StudentSumOrderByAggregateInputSchema } from './StudentSumOrderByAggregateInputSchema';

export const StudentOrderByWithAggregationInputSchema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StudentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StudentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StudentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StudentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StudentSumOrderByAggregateInputSchema).optional()
}).strict();

export default StudentOrderByWithAggregationInputSchema;
