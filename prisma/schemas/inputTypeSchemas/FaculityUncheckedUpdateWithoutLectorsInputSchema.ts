import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema } from './DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema';
import { GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema } from './GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema';

export const FaculityUncheckedUpdateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateWithoutLectorsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export default FaculityUncheckedUpdateWithoutLectorsInputSchema;
