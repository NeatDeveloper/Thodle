import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema } from './GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema';
import { StudentUncheckedUpdateManyWithoutGroupNestedInputSchema } from './StudentUncheckedUpdateManyWithoutGroupNestedInputSchema';
import { TutorUncheckedUpdateOneWithoutGroupNestedInputSchema } from './TutorUncheckedUpdateOneWithoutGroupNestedInputSchema';

export const GroupUncheckedUpdateWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutCuratorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export default GroupUncheckedUpdateWithoutCuratorInputSchema;
