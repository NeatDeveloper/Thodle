import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';

export const WeekCreateManyInputSchema: z.ZodType<Prisma.WeekCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  university: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WeekCreateManyInputSchema;
