import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FaculityCreateManyUniversityInputSchema: z.ZodType<Prisma.FaculityCreateManyUniversityInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FaculityCreateManyUniversityInputSchema;
