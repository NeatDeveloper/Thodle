import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema } from './UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema';

export const BuildingUpdateWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUpdateWithoutAuditoriumsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema).optional()
}).strict();

export default BuildingUpdateWithoutAuditoriumsInputSchema;
