import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GroupCreateManyInputSchema: z.ZodType<Prisma.GroupCreateManyInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GroupCreateManyInputSchema;
