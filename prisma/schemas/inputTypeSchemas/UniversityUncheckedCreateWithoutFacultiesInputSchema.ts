import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WeekUncheckedCreateNestedManyWithoutUniversityInputSchema } from './WeekUncheckedCreateNestedManyWithoutUniversityInputSchema';
import { BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema } from './BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema';

export const UniversityUncheckedCreateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUncheckedCreateWithoutFacultiesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekUncheckedCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export default UniversityUncheckedCreateWithoutFacultiesInputSchema;
