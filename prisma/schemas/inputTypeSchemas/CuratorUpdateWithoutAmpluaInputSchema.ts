import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneRequiredWithoutCuratorNestedInputSchema } from './GroupUpdateOneRequiredWithoutCuratorNestedInputSchema';

export const CuratorUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUpdateWithoutAmpluaInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutCuratorNestedInputSchema).optional()
}).strict();

export default CuratorUpdateWithoutAmpluaInputSchema;
