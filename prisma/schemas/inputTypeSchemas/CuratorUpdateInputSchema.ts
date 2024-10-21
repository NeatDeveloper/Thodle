import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneRequiredWithoutCuratorNestedInputSchema } from './GroupUpdateOneRequiredWithoutCuratorNestedInputSchema';
import { AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema';

export const CuratorUpdateInputSchema: z.ZodType<Prisma.CuratorUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutCuratorNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema).optional()
}).strict();

export default CuratorUpdateInputSchema;
