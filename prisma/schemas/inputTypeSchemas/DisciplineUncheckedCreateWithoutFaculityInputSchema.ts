import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema } from './ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema';

export const DisciplineUncheckedCreateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateWithoutFaculityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema).optional()
}).strict();

export default DisciplineUncheckedCreateWithoutFaculityInputSchema;
