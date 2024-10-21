import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorRankUncheckedCreateWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUncheckedCreateWithoutLectorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string()
}).strict();

export default LectorRankUncheckedCreateWithoutLectorInputSchema;
