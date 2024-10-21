import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const FaculityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FaculityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema),z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema),z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  university: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FaculityScalarWhereWithAggregatesInputSchema;
