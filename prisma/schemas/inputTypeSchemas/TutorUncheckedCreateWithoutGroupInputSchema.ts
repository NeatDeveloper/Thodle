import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TutorUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.TutorUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TutorUncheckedCreateWithoutGroupInputSchema;
