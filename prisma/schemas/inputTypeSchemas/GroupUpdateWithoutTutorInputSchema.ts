import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CuratorUpdateOneWithoutGroupNestedInputSchema } from './CuratorUpdateOneWithoutGroupNestedInputSchema';
import { GroupHeadUpdateManyWithoutGroupNestedInputSchema } from './GroupHeadUpdateManyWithoutGroupNestedInputSchema';
import { StudentUpdateManyWithoutGroupNestedInputSchema } from './StudentUpdateManyWithoutGroupNestedInputSchema';
import { FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema } from './FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema';

export const GroupUpdateWithoutTutorInputSchema: z.ZodType<Prisma.GroupUpdateWithoutTutorInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export default GroupUpdateWithoutTutorInputSchema;
