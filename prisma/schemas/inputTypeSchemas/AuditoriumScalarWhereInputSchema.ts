import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AuditoriumScalarWhereInputSchema: z.ZodType<Prisma.AuditoriumScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  building: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AuditoriumScalarWhereInputSchema;
