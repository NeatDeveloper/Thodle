import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema } from './BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema';

export const AuditoriumUpdateInputSchema: z.ZodType<Prisma.AuditoriumUpdateInput> = z.object({
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Building: z.lazy(() => BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema).optional()
}).strict();

export default AuditoriumUpdateInputSchema;
