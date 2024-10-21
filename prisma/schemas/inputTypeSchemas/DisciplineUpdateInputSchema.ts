import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ScheduleUpdateManyWithoutDisciplineNestedInputSchema } from './ScheduleUpdateManyWithoutDisciplineNestedInputSchema';
import { FaculityUpdateOneWithoutDisciplinesNestedInputSchema } from './FaculityUpdateOneWithoutDisciplinesNestedInputSchema';

export const DisciplineUpdateInputSchema: z.ZodType<Prisma.DisciplineUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  schedules: z.lazy(() => ScheduleUpdateManyWithoutDisciplineNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutDisciplinesNestedInputSchema).optional()
}).strict();

export default DisciplineUpdateInputSchema;
