import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorRankCreateManyInputSchema: z.ZodType<Prisma.LectorRankCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string(),
  lectorId: z.string()
}).strict();

export default LectorRankCreateManyInputSchema;
