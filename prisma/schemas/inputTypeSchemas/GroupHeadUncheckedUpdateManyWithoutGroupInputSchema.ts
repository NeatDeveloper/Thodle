import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BigIntFieldUpdateOperationsInputSchema } from './BigIntFieldUpdateOperationsInputSchema';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { EnumGroupHeadLevelFieldUpdateOperationsInputSchema } from './EnumGroupHeadLevelFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const GroupHeadUncheckedUpdateManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateManyWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default GroupHeadUncheckedUpdateManyWithoutGroupInputSchema;
