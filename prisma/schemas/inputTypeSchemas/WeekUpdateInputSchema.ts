import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WeekCountSchema } from './WeekCountSchema';
import { EnumWeekCountFieldUpdateOperationsInputSchema } from './EnumWeekCountFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UniversityUpdateOneWithoutWeeksNestedInputSchema } from './UniversityUpdateOneWithoutWeeksNestedInputSchema';

export const WeekUpdateInputSchema: z.ZodType<Prisma.WeekUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  University: z.lazy(() => UniversityUpdateOneWithoutWeeksNestedInputSchema).optional()
}).strict();

export default WeekUpdateInputSchema;
