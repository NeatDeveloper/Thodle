import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema } from './GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema';
import { StudentUncheckedCreateNestedManyWithoutGroupInputSchema } from './StudentUncheckedCreateNestedManyWithoutGroupInputSchema';
import { TutorUncheckedCreateNestedOneWithoutGroupInputSchema } from './TutorUncheckedCreateNestedOneWithoutGroupInputSchema';

export const GroupUncheckedCreateWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutCuratorInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export default GroupUncheckedCreateWithoutCuratorInputSchema;
