import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumCreateNestedManyWithoutBuildingInputSchema } from './AuditoriumCreateNestedManyWithoutBuildingInputSchema';

export const BuildingCreateWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingCreateWithoutUniversityInput> = z.object({
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumCreateNestedManyWithoutBuildingInputSchema).optional()
}).strict();

export default BuildingCreateWithoutUniversityInputSchema;
