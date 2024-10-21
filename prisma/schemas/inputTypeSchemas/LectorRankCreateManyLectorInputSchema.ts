import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorRankCreateManyLectorInputSchema: z.ZodType<Prisma.LectorRankCreateManyLectorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string()
}).strict();

export default LectorRankCreateManyLectorInputSchema;
