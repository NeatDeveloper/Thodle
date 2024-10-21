import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AuditoriumScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuditoriumScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema),z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema),z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  building: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AuditoriumScalarWhereWithAggregatesInputSchema;
