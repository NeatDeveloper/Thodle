import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CuratorUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateWithoutAmpluaInput> = z.object({
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CuratorUncheckedCreateWithoutAmpluaInputSchema;
