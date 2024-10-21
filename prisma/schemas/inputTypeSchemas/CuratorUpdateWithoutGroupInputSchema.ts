import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema';

export const CuratorUpdateWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUpdateWithoutGroupInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema).optional()
}).strict();

export default CuratorUpdateWithoutGroupInputSchema;
