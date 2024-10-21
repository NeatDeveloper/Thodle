import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WeekCreateNestedManyWithoutUniversityInputSchema } from './WeekCreateNestedManyWithoutUniversityInputSchema';
import { BuildingCreateNestedManyWithoutUniversityInputSchema } from './BuildingCreateNestedManyWithoutUniversityInputSchema';

export const UniversityCreateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityCreateWithoutFacultiesInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export default UniversityCreateWithoutFacultiesInputSchema;
