import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CuratorUpdateOneWithoutGroupNestedInputSchema } from './CuratorUpdateOneWithoutGroupNestedInputSchema';
import { GroupHeadUpdateManyWithoutGroupNestedInputSchema } from './GroupHeadUpdateManyWithoutGroupNestedInputSchema';
import { StudentUpdateManyWithoutGroupNestedInputSchema } from './StudentUpdateManyWithoutGroupNestedInputSchema';
import { TutorUpdateOneWithoutGroupNestedInputSchema } from './TutorUpdateOneWithoutGroupNestedInputSchema';

export const GroupUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpdateWithoutFaculityInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export default GroupUpdateWithoutFaculityInputSchema;
