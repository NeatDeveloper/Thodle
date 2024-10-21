import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ScheduleCountOrderByAggregateInputSchema } from './ScheduleCountOrderByAggregateInputSchema';
import { ScheduleAvgOrderByAggregateInputSchema } from './ScheduleAvgOrderByAggregateInputSchema';
import { ScheduleMaxOrderByAggregateInputSchema } from './ScheduleMaxOrderByAggregateInputSchema';
import { ScheduleMinOrderByAggregateInputSchema } from './ScheduleMinOrderByAggregateInputSchema';
import { ScheduleSumOrderByAggregateInputSchema } from './ScheduleSumOrderByAggregateInputSchema';

export const ScheduleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ScheduleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ScheduleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ScheduleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ScheduleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ScheduleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ScheduleSumOrderByAggregateInputSchema).optional()
}).strict();

export default ScheduleOrderByWithAggregationInputSchema;
