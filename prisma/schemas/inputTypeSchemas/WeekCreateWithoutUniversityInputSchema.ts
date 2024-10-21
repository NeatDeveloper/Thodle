import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';

export const WeekCreateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekCreateWithoutUniversityInput> = z.object({
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WeekCreateWithoutUniversityInputSchema;
