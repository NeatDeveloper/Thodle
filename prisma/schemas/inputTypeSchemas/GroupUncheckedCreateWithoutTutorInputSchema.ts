import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorUncheckedCreateNestedOneWithoutGroupInputSchema } from './CuratorUncheckedCreateNestedOneWithoutGroupInputSchema';
import { GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema } from './GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema';
import { StudentUncheckedCreateNestedManyWithoutGroupInputSchema } from './StudentUncheckedCreateNestedManyWithoutGroupInputSchema';

export const GroupUncheckedCreateWithoutTutorInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutTutorInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export default GroupUncheckedCreateWithoutTutorInputSchema;
