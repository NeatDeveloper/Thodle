import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StudentCreateManyInputSchema: z.ZodType<Prisma.StudentCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default StudentCreateManyInputSchema;
