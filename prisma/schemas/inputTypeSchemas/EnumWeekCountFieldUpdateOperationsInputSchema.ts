import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';

export const EnumWeekCountFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWeekCountFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WeekCountSchema).optional()
}).strict();

export default EnumWeekCountFieldUpdateOperationsInputSchema;
