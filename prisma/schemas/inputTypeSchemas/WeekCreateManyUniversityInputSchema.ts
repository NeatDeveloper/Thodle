import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';

export const WeekCreateManyUniversityInputSchema: z.ZodType<Prisma.WeekCreateManyUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WeekCreateManyUniversityInputSchema;
