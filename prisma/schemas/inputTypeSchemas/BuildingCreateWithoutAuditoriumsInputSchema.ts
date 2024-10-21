import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateNestedOneWithoutBuildingsInputSchema } from './UniversityCreateNestedOneWithoutBuildingsInputSchema';

export const BuildingCreateWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingCreateWithoutAuditoriumsInput> = z.object({
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutBuildingsInputSchema)
}).strict();

export default BuildingCreateWithoutAuditoriumsInputSchema;
