import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TutorUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUncheckedCreateWithoutAmpluaInput> = z.object({
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TutorUncheckedCreateWithoutAmpluaInputSchema;
