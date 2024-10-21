import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const DisciplineScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DisciplineScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema),z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema),z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DisciplineScalarWhereWithAggregatesInputSchema;
