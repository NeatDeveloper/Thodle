import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema } from './AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema';

export const BuildingUncheckedCreateWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateWithoutUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema).optional()
}).strict();

export default BuildingUncheckedCreateWithoutUniversityInputSchema;
