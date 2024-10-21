import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuditoriumUncheckedCreateWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUncheckedCreateWithoutBuildingInput> = z.object({
  id: z.number().int().optional(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AuditoriumUncheckedCreateWithoutBuildingInputSchema;
