import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DisciplineCreateManyInputSchema: z.ZodType<Prisma.DisciplineCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DisciplineCreateManyInputSchema;
