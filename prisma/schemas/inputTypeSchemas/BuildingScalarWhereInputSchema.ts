import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BuildingScalarWhereInputSchema: z.ZodType<Prisma.BuildingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BuildingScalarWhereInputSchema;
