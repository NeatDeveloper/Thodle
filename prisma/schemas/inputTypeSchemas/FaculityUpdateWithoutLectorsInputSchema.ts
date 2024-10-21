import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DisciplineUpdateManyWithoutFaculityNestedInputSchema } from './DisciplineUpdateManyWithoutFaculityNestedInputSchema';
import { GroupUpdateManyWithoutFaculityNestedInputSchema } from './GroupUpdateManyWithoutFaculityNestedInputSchema';
import { UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema } from './UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema';

export const FaculityUpdateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutLectorsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export default FaculityUpdateWithoutLectorsInputSchema;
