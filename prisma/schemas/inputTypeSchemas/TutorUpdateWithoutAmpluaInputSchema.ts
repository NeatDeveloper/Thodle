import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneRequiredWithoutTutorNestedInputSchema } from './GroupUpdateOneRequiredWithoutTutorNestedInputSchema';

export const TutorUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUpdateWithoutAmpluaInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutTutorNestedInputSchema).optional()
}).strict();

export default TutorUpdateWithoutAmpluaInputSchema;
