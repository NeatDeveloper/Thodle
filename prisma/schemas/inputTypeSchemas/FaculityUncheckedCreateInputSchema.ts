import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema } from './DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema';
import { LectorUncheckedCreateNestedManyWithoutFaculityInputSchema } from './LectorUncheckedCreateNestedManyWithoutFaculityInputSchema';
import { GroupUncheckedCreateNestedManyWithoutFaculityInputSchema } from './GroupUncheckedCreateNestedManyWithoutFaculityInputSchema';

export const FaculityUncheckedCreateInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export default FaculityUncheckedCreateInputSchema;
