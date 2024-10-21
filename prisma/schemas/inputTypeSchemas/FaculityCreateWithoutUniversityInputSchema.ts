import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateNestedManyWithoutFaculityInputSchema } from './DisciplineCreateNestedManyWithoutFaculityInputSchema';
import { LectorCreateNestedManyWithoutFaculityInputSchema } from './LectorCreateNestedManyWithoutFaculityInputSchema';
import { GroupCreateNestedManyWithoutFaculityInputSchema } from './GroupCreateNestedManyWithoutFaculityInputSchema';

export const FaculityCreateWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityCreateWithoutUniversityInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export default FaculityCreateWithoutUniversityInputSchema;
