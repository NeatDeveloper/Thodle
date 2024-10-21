import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema } from './WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema';
import { BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema } from './BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema';

export const UniversityUncheckedUpdateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUncheckedUpdateWithoutFacultiesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export default UniversityUncheckedUpdateWithoutFacultiesInputSchema;
