import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { EnumGroupHeadLevelFieldUpdateOperationsInputSchema } from './EnumGroupHeadLevelFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema';

export const GroupHeadUpdateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpdateWithoutGroupInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema).optional()
}).strict();

export default GroupHeadUpdateWithoutGroupInputSchema;
