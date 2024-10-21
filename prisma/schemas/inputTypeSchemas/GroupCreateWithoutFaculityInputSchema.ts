import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateNestedOneWithoutGroupInputSchema } from './CuratorCreateNestedOneWithoutGroupInputSchema';
import { GroupHeadCreateNestedManyWithoutGroupInputSchema } from './GroupHeadCreateNestedManyWithoutGroupInputSchema';
import { StudentCreateNestedManyWithoutGroupInputSchema } from './StudentCreateNestedManyWithoutGroupInputSchema';
import { TutorCreateNestedOneWithoutGroupInputSchema } from './TutorCreateNestedOneWithoutGroupInputSchema';

export const GroupCreateWithoutFaculityInputSchema: z.ZodType<Prisma.GroupCreateWithoutFaculityInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export default GroupCreateWithoutFaculityInputSchema;
