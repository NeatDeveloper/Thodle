import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';

export const WeekUncheckedCreateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUncheckedCreateWithoutUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WeekUncheckedCreateWithoutUniversityInputSchema;
