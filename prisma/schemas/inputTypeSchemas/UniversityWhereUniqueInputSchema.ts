import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WeekListRelationFilterSchema } from './WeekListRelationFilterSchema';
import { FaculityListRelationFilterSchema } from './FaculityListRelationFilterSchema';
import { BuildingListRelationFilterSchema } from './BuildingListRelationFilterSchema';

export const UniversityWhereUniqueInputSchema: z.ZodType<Prisma.UniversityWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string(),
    fullName: z.string()
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    fullName: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
    fullName: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    fullName: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  fullName: z.string().optional(),
  AND: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UniversityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studyTime: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  weeks: z.lazy(() => WeekListRelationFilterSchema).optional(),
  faculties: z.lazy(() => FaculityListRelationFilterSchema).optional(),
  buildings: z.lazy(() => BuildingListRelationFilterSchema).optional()
}).strict());

export default UniversityWhereUniqueInputSchema;
