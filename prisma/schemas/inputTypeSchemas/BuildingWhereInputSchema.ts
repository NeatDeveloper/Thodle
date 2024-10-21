import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AuditoriumListRelationFilterSchema } from './AuditoriumListRelationFilterSchema';
import { UniversityRelationFilterSchema } from './UniversityRelationFilterSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const BuildingWhereInputSchema: z.ZodType<Prisma.BuildingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  auditoriums: z.lazy(() => AuditoriumListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict();

export default BuildingWhereInputSchema;
