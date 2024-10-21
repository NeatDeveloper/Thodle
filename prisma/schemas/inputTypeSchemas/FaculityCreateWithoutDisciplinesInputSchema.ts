import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateNestedManyWithoutFaculityInputSchema } from './LectorCreateNestedManyWithoutFaculityInputSchema';
import { GroupCreateNestedManyWithoutFaculityInputSchema } from './GroupCreateNestedManyWithoutFaculityInputSchema';
import { UniversityCreateNestedOneWithoutFacultiesInputSchema } from './UniversityCreateNestedOneWithoutFacultiesInputSchema';

export const FaculityCreateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityCreateWithoutDisciplinesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export default FaculityCreateWithoutDisciplinesInputSchema;
