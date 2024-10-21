import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CuratorOrderByWithRelationInputSchema } from './CuratorOrderByWithRelationInputSchema';
import { GroupHeadOrderByRelationAggregateInputSchema } from './GroupHeadOrderByRelationAggregateInputSchema';
import { StudentOrderByRelationAggregateInputSchema } from './StudentOrderByRelationAggregateInputSchema';
import { TutorOrderByWithRelationInputSchema } from './TutorOrderByWithRelationInputSchema';
import { FaculityOrderByWithRelationInputSchema } from './FaculityOrderByWithRelationInputSchema';

export const GroupOrderByWithRelationInputSchema: z.ZodType<Prisma.GroupOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  curator: z.lazy(() => CuratorOrderByWithRelationInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadOrderByRelationAggregateInputSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputSchema).optional(),
  tutor: z.lazy(() => TutorOrderByWithRelationInputSchema).optional(),
  Faculity: z.lazy(() => FaculityOrderByWithRelationInputSchema).optional()
}).strict();

export default GroupOrderByWithRelationInputSchema;
