import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema';

export const TutorUpdateWithoutGroupInputSchema: z.ZodType<Prisma.TutorUpdateWithoutGroupInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema).optional()
}).strict();

export default TutorUpdateWithoutGroupInputSchema;
