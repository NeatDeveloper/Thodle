import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema';

export const StudentUpdateWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpdateWithoutGroupInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema).optional()
}).strict();

export default StudentUpdateWithoutGroupInputSchema;
