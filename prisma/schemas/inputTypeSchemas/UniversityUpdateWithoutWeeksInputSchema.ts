import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FaculityUpdateManyWithoutUniversityNestedInputSchema } from './FaculityUpdateManyWithoutUniversityNestedInputSchema';
import { BuildingUpdateManyWithoutUniversityNestedInputSchema } from './BuildingUpdateManyWithoutUniversityNestedInputSchema';

export const UniversityUpdateWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUpdateWithoutWeeksInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  faculties: z.lazy(() => FaculityUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export default UniversityUpdateWithoutWeeksInputSchema;
