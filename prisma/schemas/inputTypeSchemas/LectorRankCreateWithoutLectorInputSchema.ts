import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorRankCreateWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankCreateWithoutLectorInput> = z.object({
  title: z.string(),
  shortVariant: z.string()
}).strict();

export default LectorRankCreateWithoutLectorInputSchema;
