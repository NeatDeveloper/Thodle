import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleCreateNestedManyWithoutDisciplineInputSchema } from './ScheduleCreateNestedManyWithoutDisciplineInputSchema';
import { FaculityCreateNestedOneWithoutDisciplinesInputSchema } from './FaculityCreateNestedOneWithoutDisciplinesInputSchema';

export const DisciplineCreateInputSchema: z.ZodType<Prisma.DisciplineCreateInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleCreateNestedManyWithoutDisciplineInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutDisciplinesInputSchema).optional()
}).strict();

export default DisciplineCreateInputSchema;
