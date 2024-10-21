import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { FaculityCreateNestedManyWithoutUniversityInputSchema } from './FaculityCreateNestedManyWithoutUniversityInputSchema';
import { BuildingCreateNestedManyWithoutUniversityInputSchema } from './BuildingCreateNestedManyWithoutUniversityInputSchema';

export const UniversityCreateWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityCreateWithoutWeeksInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  faculties: z.lazy(() => FaculityCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export default UniversityCreateWithoutWeeksInputSchema;
