import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleWhereInputSchema } from './ScheduleWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DisciplineRelationFilterSchema } from './DisciplineRelationFilterSchema';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';

export const ScheduleWhereUniqueInputSchema: z.ZodType<Prisma.ScheduleWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  discipline: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  Discipline: z.union([ z.lazy(() => DisciplineRelationFilterSchema),z.lazy(() => DisciplineWhereInputSchema) ]).optional(),
}).strict());

export default ScheduleWhereUniqueInputSchema;
