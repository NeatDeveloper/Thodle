import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GroupCreateManyFaculityInputSchema: z.ZodType<Prisma.GroupCreateManyFaculityInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GroupCreateManyFaculityInputSchema;
