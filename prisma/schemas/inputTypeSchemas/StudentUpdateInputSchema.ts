import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema';
import { GroupUpdateOneWithoutStudentsNestedInputSchema } from './GroupUpdateOneWithoutStudentsNestedInputSchema';

export const StudentUpdateInputSchema: z.ZodType<Prisma.StudentUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema).optional(),
  Group: z.lazy(() => GroupUpdateOneWithoutStudentsNestedInputSchema).optional()
}).strict();

export default StudentUpdateInputSchema;
