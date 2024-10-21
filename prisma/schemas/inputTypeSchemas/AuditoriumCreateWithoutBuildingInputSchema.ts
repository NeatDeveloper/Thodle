import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuditoriumCreateWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateWithoutBuildingInput> = z.object({
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AuditoriumCreateWithoutBuildingInputSchema;
