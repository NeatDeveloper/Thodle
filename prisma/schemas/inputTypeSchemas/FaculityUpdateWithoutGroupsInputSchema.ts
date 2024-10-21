import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DisciplineUpdateManyWithoutFaculityNestedInputSchema } from './DisciplineUpdateManyWithoutFaculityNestedInputSchema';
import { LectorUpdateManyWithoutFaculityNestedInputSchema } from './LectorUpdateManyWithoutFaculityNestedInputSchema';
import { UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema } from './UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema';

export const FaculityUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutGroupsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export default FaculityUpdateWithoutGroupsInputSchema;
