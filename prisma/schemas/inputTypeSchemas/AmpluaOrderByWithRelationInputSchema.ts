import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { StudentOrderByWithRelationInputSchema } from './StudentOrderByWithRelationInputSchema';
import { GroupHeadOrderByWithRelationInputSchema } from './GroupHeadOrderByWithRelationInputSchema';
import { CuratorOrderByWithRelationInputSchema } from './CuratorOrderByWithRelationInputSchema';
import { TutorOrderByWithRelationInputSchema } from './TutorOrderByWithRelationInputSchema';
import { LectorOrderByWithRelationInputSchema } from './LectorOrderByWithRelationInputSchema';
import { AmpluaOrderByRelevanceInputSchema } from './AmpluaOrderByRelevanceInputSchema';

export const AmpluaOrderByWithRelationInputSchema: z.ZodType<Prisma.AmpluaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  student: z.lazy(() => StudentOrderByWithRelationInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadOrderByWithRelationInputSchema).optional(),
  curator: z.lazy(() => CuratorOrderByWithRelationInputSchema).optional(),
  tutor: z.lazy(() => TutorOrderByWithRelationInputSchema).optional(),
  lector: z.lazy(() => LectorOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AmpluaOrderByRelevanceInputSchema).optional()
}).strict();

export default AmpluaOrderByWithRelationInputSchema;
