import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LectorRankOrderByRelationAggregateInputSchema } from './LectorRankOrderByRelationAggregateInputSchema';
import { FaculityOrderByWithRelationInputSchema } from './FaculityOrderByWithRelationInputSchema';
import { AmpluaOrderByWithRelationInputSchema } from './AmpluaOrderByWithRelationInputSchema';
import { LectorOrderByRelevanceInputSchema } from './LectorOrderByRelevanceInputSchema';

export const LectorOrderByWithRelationInputSchema: z.ZodType<Prisma.LectorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ranks: z.lazy(() => LectorRankOrderByRelationAggregateInputSchema).optional(),
  Faculity: z.lazy(() => FaculityOrderByWithRelationInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LectorOrderByRelevanceInputSchema).optional()
}).strict();

export default LectorOrderByWithRelationInputSchema;
