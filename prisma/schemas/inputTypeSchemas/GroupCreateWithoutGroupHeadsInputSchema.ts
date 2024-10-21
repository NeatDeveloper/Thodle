import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateNestedOneWithoutGroupInputSchema } from './CuratorCreateNestedOneWithoutGroupInputSchema';
import { StudentCreateNestedManyWithoutGroupInputSchema } from './StudentCreateNestedManyWithoutGroupInputSchema';
import { TutorCreateNestedOneWithoutGroupInputSchema } from './TutorCreateNestedOneWithoutGroupInputSchema';
import { FaculityCreateNestedOneWithoutGroupsInputSchema } from './FaculityCreateNestedOneWithoutGroupsInputSchema';

export const GroupCreateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupCreateWithoutGroupHeadsInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutGroupsInputSchema)
}).strict();

export default GroupCreateWithoutGroupHeadsInputSchema;
