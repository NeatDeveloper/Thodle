import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneRequiredWithoutTutorNestedInputSchema } from './GroupUpdateOneRequiredWithoutTutorNestedInputSchema';
import { AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema';

export const TutorUpdateInputSchema: z.ZodType<Prisma.TutorUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutTutorNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema).optional()
}).strict();

export default TutorUpdateInputSchema;
