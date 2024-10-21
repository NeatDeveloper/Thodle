import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LectorUpdateManyWithoutFaculityNestedInputSchema } from './LectorUpdateManyWithoutFaculityNestedInputSchema';
import { GroupUpdateManyWithoutFaculityNestedInputSchema } from './GroupUpdateManyWithoutFaculityNestedInputSchema';
import { UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema } from './UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema';

export const FaculityUpdateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutDisciplinesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lectors: z.lazy(() => LectorUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export default FaculityUpdateWithoutDisciplinesInputSchema;
