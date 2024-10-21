import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { EnumGroupHeadLevelFieldUpdateOperationsInputSchema } from './EnumGroupHeadLevelFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const GroupHeadUncheckedUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateWithoutAmpluaInput> = z.object({
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default GroupHeadUncheckedUpdateWithoutAmpluaInputSchema;
