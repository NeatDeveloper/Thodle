import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { EnumGroupHeadLevelFieldUpdateOperationsInputSchema } from './EnumGroupHeadLevelFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema } from './GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema';
import { AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema';

export const GroupHeadUpdateInputSchema: z.ZodType<Prisma.GroupHeadUpdateInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema).optional()
}).strict();

export default GroupHeadUpdateInputSchema;
