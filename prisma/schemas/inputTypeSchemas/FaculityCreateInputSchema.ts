import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateNestedManyWithoutFaculityInputSchema } from './DisciplineCreateNestedManyWithoutFaculityInputSchema';
import { LectorCreateNestedManyWithoutFaculityInputSchema } from './LectorCreateNestedManyWithoutFaculityInputSchema';
import { GroupCreateNestedManyWithoutFaculityInputSchema } from './GroupCreateNestedManyWithoutFaculityInputSchema';
import { UniversityCreateNestedOneWithoutFacultiesInputSchema } from './UniversityCreateNestedOneWithoutFacultiesInputSchema';

export const FaculityCreateInputSchema: z.ZodType<Prisma.FaculityCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export default FaculityCreateInputSchema;
