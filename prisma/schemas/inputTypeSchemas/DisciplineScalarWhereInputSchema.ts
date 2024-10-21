import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DisciplineScalarWhereInputSchema: z.ZodType<Prisma.DisciplineScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DisciplineScalarWhereInputSchema;
