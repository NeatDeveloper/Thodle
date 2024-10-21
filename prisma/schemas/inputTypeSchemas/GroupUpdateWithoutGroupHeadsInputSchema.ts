import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CuratorUpdateOneWithoutGroupNestedInputSchema } from './CuratorUpdateOneWithoutGroupNestedInputSchema';
import { StudentUpdateManyWithoutGroupNestedInputSchema } from './StudentUpdateManyWithoutGroupNestedInputSchema';
import { TutorUpdateOneWithoutGroupNestedInputSchema } from './TutorUpdateOneWithoutGroupNestedInputSchema';
import { FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema } from './FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema';

export const GroupUpdateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUpdateWithoutGroupHeadsInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export default GroupUpdateWithoutGroupHeadsInputSchema;
