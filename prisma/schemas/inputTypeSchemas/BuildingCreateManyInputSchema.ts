import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BuildingCreateManyInputSchema: z.ZodType<Prisma.BuildingCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BuildingCreateManyInputSchema;
