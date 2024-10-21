import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const LectorRankScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LectorRankScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  shortVariant: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default LectorRankScalarWhereWithAggregatesInputSchema;
