import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WeekCreateNestedManyWithoutUniversityInputSchema } from './WeekCreateNestedManyWithoutUniversityInputSchema';
import { FaculityCreateNestedManyWithoutUniversityInputSchema } from './FaculityCreateNestedManyWithoutUniversityInputSchema';
import { BuildingCreateNestedManyWithoutUniversityInputSchema } from './BuildingCreateNestedManyWithoutUniversityInputSchema';

export const UniversityCreateInputSchema: z.ZodType<Prisma.UniversityCreateInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekCreateNestedManyWithoutUniversityInputSchema).optional(),
  faculties: z.lazy(() => FaculityCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export default UniversityCreateInputSchema;
