import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema } from './CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema';
import { GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema } from './GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema';
import { TutorUncheckedUpdateOneWithoutGroupNestedInputSchema } from './TutorUncheckedUpdateOneWithoutGroupNestedInputSchema';

export const GroupUncheckedUpdateWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutStudentsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export default GroupUncheckedUpdateWithoutStudentsInputSchema;
