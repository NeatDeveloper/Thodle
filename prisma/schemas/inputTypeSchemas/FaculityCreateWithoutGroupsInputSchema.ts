import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateNestedManyWithoutFaculityInputSchema } from './DisciplineCreateNestedManyWithoutFaculityInputSchema';
import { LectorCreateNestedManyWithoutFaculityInputSchema } from './LectorCreateNestedManyWithoutFaculityInputSchema';
import { UniversityCreateNestedOneWithoutFacultiesInputSchema } from './UniversityCreateNestedOneWithoutFacultiesInputSchema';

export const FaculityCreateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityCreateWithoutGroupsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export default FaculityCreateWithoutGroupsInputSchema;
