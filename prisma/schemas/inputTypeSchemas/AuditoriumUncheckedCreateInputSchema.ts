import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuditoriumUncheckedCreateInputSchema: z.ZodType<Prisma.AuditoriumUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  building: z.number().int(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AuditoriumUncheckedCreateInputSchema;
