import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StudentUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default StudentUncheckedCreateWithoutGroupInputSchema;
