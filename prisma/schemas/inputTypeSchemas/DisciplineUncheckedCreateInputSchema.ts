import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema } from './ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema';

export const DisciplineUncheckedCreateInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema).optional()
}).strict();

export default DisciplineUncheckedCreateInputSchema;
