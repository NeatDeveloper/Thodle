import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorRankUncheckedCreateInputSchema: z.ZodType<Prisma.LectorRankUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string(),
  lectorId: z.string()
}).strict();

export default LectorRankUncheckedCreateInputSchema;
