import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { EnumGroupHeadLevelFieldUpdateOperationsInputSchema } from './EnumGroupHeadLevelFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema } from './GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema';

export const GroupHeadUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUpdateWithoutAmpluaInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema).optional()
}).strict();

export default GroupHeadUpdateWithoutAmpluaInputSchema;
