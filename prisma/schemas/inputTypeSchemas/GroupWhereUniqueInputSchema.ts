import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CuratorNullableRelationFilterSchema } from './CuratorNullableRelationFilterSchema';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';
import { GroupHeadListRelationFilterSchema } from './GroupHeadListRelationFilterSchema';
import { StudentListRelationFilterSchema } from './StudentListRelationFilterSchema';
import { TutorNullableRelationFilterSchema } from './TutorNullableRelationFilterSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { FaculityRelationFilterSchema } from './FaculityRelationFilterSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const GroupWhereUniqueInputSchema: z.ZodType<Prisma.GroupWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  groupYear: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  faculity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  curator: z.union([ z.lazy(() => CuratorNullableRelationFilterSchema),z.lazy(() => CuratorWhereInputSchema) ]).optional().nullable(),
  groupHeads: z.lazy(() => GroupHeadListRelationFilterSchema).optional(),
  students: z.lazy(() => StudentListRelationFilterSchema).optional(),
  tutor: z.union([ z.lazy(() => TutorNullableRelationFilterSchema),z.lazy(() => TutorWhereInputSchema) ]).optional().nullable(),
  Faculity: z.union([ z.lazy(() => FaculityRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
}).strict());

export default GroupWhereUniqueInputSchema;
