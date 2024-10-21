import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DisciplineListRelationFilterSchema } from './DisciplineListRelationFilterSchema';
import { LectorListRelationFilterSchema } from './LectorListRelationFilterSchema';
import { GroupListRelationFilterSchema } from './GroupListRelationFilterSchema';
import { UniversityRelationFilterSchema } from './UniversityRelationFilterSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const FaculityWhereInputSchema: z.ZodType<Prisma.FaculityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FaculityWhereInputSchema),z.lazy(() => FaculityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityWhereInputSchema),z.lazy(() => FaculityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  disciplines: z.lazy(() => DisciplineListRelationFilterSchema).optional(),
  lectors: z.lazy(() => LectorListRelationFilterSchema).optional(),
  groups: z.lazy(() => GroupListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict();

export default FaculityWhereInputSchema;
