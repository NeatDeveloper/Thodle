import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleCreateNestedManyWithoutDisciplineInputSchema } from './ScheduleCreateNestedManyWithoutDisciplineInputSchema';

export const DisciplineCreateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateWithoutFaculityInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleCreateNestedManyWithoutDisciplineInputSchema).optional()
}).strict();

export default DisciplineCreateWithoutFaculityInputSchema;
