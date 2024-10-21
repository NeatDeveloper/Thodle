import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TutorCreateManyInputSchema: z.ZodType<Prisma.TutorCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TutorCreateManyInputSchema;
