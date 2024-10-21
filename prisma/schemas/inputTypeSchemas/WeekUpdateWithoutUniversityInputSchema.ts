import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WeekCountSchema } from './WeekCountSchema';
import { EnumWeekCountFieldUpdateOperationsInputSchema } from './EnumWeekCountFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const WeekUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpdateWithoutUniversityInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default WeekUpdateWithoutUniversityInputSchema;
