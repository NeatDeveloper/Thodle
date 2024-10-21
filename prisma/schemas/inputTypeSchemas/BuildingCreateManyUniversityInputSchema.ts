import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BuildingCreateManyUniversityInputSchema: z.ZodType<Prisma.BuildingCreateManyUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BuildingCreateManyUniversityInputSchema;
