import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateNestedManyWithoutFaculityInputSchema } from './DisciplineCreateNestedManyWithoutFaculityInputSchema';
import { GroupCreateNestedManyWithoutFaculityInputSchema } from './GroupCreateNestedManyWithoutFaculityInputSchema';
import { UniversityCreateNestedOneWithoutFacultiesInputSchema } from './UniversityCreateNestedOneWithoutFacultiesInputSchema';

export const FaculityCreateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityCreateWithoutLectorsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export default FaculityCreateWithoutLectorsInputSchema;
