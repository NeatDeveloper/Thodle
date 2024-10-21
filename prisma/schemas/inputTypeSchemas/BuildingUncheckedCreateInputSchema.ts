import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema } from './AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema';

export const BuildingUncheckedCreateInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema).optional()
}).strict();

export default BuildingUncheckedCreateInputSchema;
