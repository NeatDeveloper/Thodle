import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorUncheckedCreateNestedOneWithoutGroupInputSchema } from './CuratorUncheckedCreateNestedOneWithoutGroupInputSchema';
import { GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema } from './GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema';
import { TutorUncheckedCreateNestedOneWithoutGroupInputSchema } from './TutorUncheckedCreateNestedOneWithoutGroupInputSchema';

export const GroupUncheckedCreateWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutStudentsInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export default GroupUncheckedCreateWithoutStudentsInputSchema;
