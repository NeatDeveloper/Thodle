import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BuildingRelationFilterSchema } from './BuildingRelationFilterSchema';
import { BuildingWhereInputSchema } from './BuildingWhereInputSchema';

export const AuditoriumWhereInputSchema: z.ZodType<Prisma.AuditoriumWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuditoriumWhereInputSchema),z.lazy(() => AuditoriumWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumWhereInputSchema),z.lazy(() => AuditoriumWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  building: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Building: z.union([ z.lazy(() => BuildingRelationFilterSchema),z.lazy(() => BuildingWhereInputSchema) ]).optional(),
}).strict();

export default AuditoriumWhereInputSchema;
