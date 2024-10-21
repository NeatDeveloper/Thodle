import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { GroupOrderByWithRelationInputSchema } from './GroupOrderByWithRelationInputSchema';
import { AmpluaOrderByWithRelationInputSchema } from './AmpluaOrderByWithRelationInputSchema';
import { CuratorOrderByRelevanceInputSchema } from './CuratorOrderByRelevanceInputSchema';

export const CuratorOrderByWithRelationInputSchema: z.ZodType<Prisma.CuratorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => CuratorOrderByRelevanceInputSchema).optional()
}).strict();

export default CuratorOrderByWithRelationInputSchema;
