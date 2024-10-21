import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DisciplineRelationFilterSchema } from './DisciplineRelationFilterSchema';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';

export const ScheduleWhereInputSchema: z.ZodType<Prisma.ScheduleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  discipline: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Discipline: z.union([ z.lazy(() => DisciplineRelationFilterSchema),z.lazy(() => DisciplineWhereInputSchema) ]).optional(),
}).strict();

export default ScheduleWhereInputSchema;
