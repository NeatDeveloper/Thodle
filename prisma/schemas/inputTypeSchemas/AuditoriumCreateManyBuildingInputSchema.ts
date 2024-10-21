import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuditoriumCreateManyBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateManyBuildingInput> = z.object({
  id: z.number().int().optional(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AuditoriumCreateManyBuildingInputSchema;
