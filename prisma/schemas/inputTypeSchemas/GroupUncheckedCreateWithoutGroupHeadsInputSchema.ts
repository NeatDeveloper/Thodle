import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorUncheckedCreateNestedOneWithoutGroupInputSchema } from './CuratorUncheckedCreateNestedOneWithoutGroupInputSchema';
import { StudentUncheckedCreateNestedManyWithoutGroupInputSchema } from './StudentUncheckedCreateNestedManyWithoutGroupInputSchema';
import { TutorUncheckedCreateNestedOneWithoutGroupInputSchema } from './TutorUncheckedCreateNestedOneWithoutGroupInputSchema';

export const GroupUncheckedCreateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutGroupHeadsInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export default GroupUncheckedCreateWithoutGroupHeadsInputSchema;
