import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorUncheckedCreateNestedManyWithoutFaculityInputSchema } from './LectorUncheckedCreateNestedManyWithoutFaculityInputSchema';
import { GroupUncheckedCreateNestedManyWithoutFaculityInputSchema } from './GroupUncheckedCreateNestedManyWithoutFaculityInputSchema';

export const FaculityUncheckedCreateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutDisciplinesInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export default FaculityUncheckedCreateWithoutDisciplinesInputSchema;
