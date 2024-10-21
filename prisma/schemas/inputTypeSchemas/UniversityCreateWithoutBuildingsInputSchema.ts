import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WeekCreateNestedManyWithoutUniversityInputSchema } from './WeekCreateNestedManyWithoutUniversityInputSchema';
import { FaculityCreateNestedManyWithoutUniversityInputSchema } from './FaculityCreateNestedManyWithoutUniversityInputSchema';

export const UniversityCreateWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityCreateWithoutBuildingsInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekCreateNestedManyWithoutUniversityInputSchema).optional(),
  faculties: z.lazy(() => FaculityCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export default UniversityCreateWithoutBuildingsInputSchema;
