import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereInputSchema } from './BuildingWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AuditoriumListRelationFilterSchema } from './AuditoriumListRelationFilterSchema';
import { UniversityRelationFilterSchema } from './UniversityRelationFilterSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const BuildingWhereUniqueInputSchema: z.ZodType<Prisma.BuildingWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  auditoriums: z.lazy(() => AuditoriumListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict());

export default BuildingWhereUniqueInputSchema;
