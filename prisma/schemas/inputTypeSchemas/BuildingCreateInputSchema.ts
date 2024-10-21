import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumCreateNestedManyWithoutBuildingInputSchema } from './AuditoriumCreateNestedManyWithoutBuildingInputSchema';
import { UniversityCreateNestedOneWithoutBuildingsInputSchema } from './UniversityCreateNestedOneWithoutBuildingsInputSchema';

export const BuildingCreateInputSchema: z.ZodType<Prisma.BuildingCreateInput> = z.object({
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumCreateNestedManyWithoutBuildingInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutBuildingsInputSchema)
}).strict();

export default BuildingCreateInputSchema;
