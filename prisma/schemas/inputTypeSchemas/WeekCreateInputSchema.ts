import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCountSchema } from './WeekCountSchema';
import { UniversityCreateNestedOneWithoutWeeksInputSchema } from './UniversityCreateNestedOneWithoutWeeksInputSchema';

export const WeekCreateInputSchema: z.ZodType<Prisma.WeekCreateInput> = z.object({
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutWeeksInputSchema).optional()
}).strict();

export default WeekCreateInputSchema;
