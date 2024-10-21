import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const FaculityScalarWhereInputSchema: z.ZodType<Prisma.FaculityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FaculityScalarWhereInputSchema;
