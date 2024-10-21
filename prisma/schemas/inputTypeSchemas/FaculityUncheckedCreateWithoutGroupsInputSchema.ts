import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema } from './DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema';
import { LectorUncheckedCreateNestedManyWithoutFaculityInputSchema } from './LectorUncheckedCreateNestedManyWithoutFaculityInputSchema';

export const FaculityUncheckedCreateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutGroupsInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export default FaculityUncheckedCreateWithoutGroupsInputSchema;
