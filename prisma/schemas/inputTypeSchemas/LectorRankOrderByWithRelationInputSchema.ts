import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LectorOrderByWithRelationInputSchema } from './LectorOrderByWithRelationInputSchema';
import { LectorRankOrderByRelevanceInputSchema } from './LectorRankOrderByRelevanceInputSchema';

export const LectorRankOrderByWithRelationInputSchema: z.ZodType<Prisma.LectorRankOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional(),
  Lector: z.lazy(() => LectorOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LectorRankOrderByRelevanceInputSchema).optional()
}).strict();

export default LectorRankOrderByWithRelationInputSchema;
