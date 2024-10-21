import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DisciplineCreateManyFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateManyFaculityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DisciplineCreateManyFaculityInputSchema;
