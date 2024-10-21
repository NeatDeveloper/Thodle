import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema } from './DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema';
import { GroupUncheckedCreateNestedManyWithoutFaculityInputSchema } from './GroupUncheckedCreateNestedManyWithoutFaculityInputSchema';

export const FaculityUncheckedCreateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutLectorsInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export default FaculityUncheckedCreateWithoutLectorsInputSchema;
