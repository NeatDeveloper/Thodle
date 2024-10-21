import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WeekListRelationFilterSchema } from './WeekListRelationFilterSchema';
import { FaculityListRelationFilterSchema } from './FaculityListRelationFilterSchema';
import { BuildingListRelationFilterSchema } from './BuildingListRelationFilterSchema';

export const UniversityWhereInputSchema: z.ZodType<Prisma.UniversityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UniversityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fullName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studyTime: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  weeks: z.lazy(() => WeekListRelationFilterSchema).optional(),
  faculties: z.lazy(() => FaculityListRelationFilterSchema).optional(),
  buildings: z.lazy(() => BuildingListRelationFilterSchema).optional()
}).strict();

export default UniversityWhereInputSchema;
