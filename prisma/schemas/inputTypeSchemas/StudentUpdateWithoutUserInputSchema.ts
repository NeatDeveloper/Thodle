import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneWithoutStudentsNestedInputSchema } from './GroupUpdateOneWithoutStudentsNestedInputSchema';

export const StudentUpdateWithoutUserInputSchema: z.ZodType<Prisma.StudentUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneWithoutStudentsNestedInputSchema).optional()
}).strict();

export default StudentUpdateWithoutUserInputSchema;
