import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FaculityCreateManyInputSchema: z.ZodType<Prisma.FaculityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FaculityCreateManyInputSchema;
