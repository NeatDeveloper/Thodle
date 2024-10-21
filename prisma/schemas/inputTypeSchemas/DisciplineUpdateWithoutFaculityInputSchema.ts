import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ScheduleUpdateManyWithoutDisciplineNestedInputSchema } from './ScheduleUpdateManyWithoutDisciplineNestedInputSchema';

export const DisciplineUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpdateWithoutFaculityInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  schedules: z.lazy(() => ScheduleUpdateManyWithoutDisciplineNestedInputSchema).optional()
}).strict();

export default DisciplineUpdateWithoutFaculityInputSchema;
