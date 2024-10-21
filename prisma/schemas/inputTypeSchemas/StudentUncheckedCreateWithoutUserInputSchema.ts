import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StudentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutUserInput> = z.object({
  group: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default StudentUncheckedCreateWithoutUserInputSchema;
