import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuditoriumCreateManyInputSchema: z.ZodType<Prisma.AuditoriumCreateManyInput> = z.object({
  id: z.number().int().optional(),
  building: z.number().int(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AuditoriumCreateManyInputSchema;
