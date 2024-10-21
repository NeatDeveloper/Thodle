import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekWhereUniqueInputSchema } from './WeekWhereUniqueInputSchema';
import { WeekUpdateWithoutUniversityInputSchema } from './WeekUpdateWithoutUniversityInputSchema';
import { WeekUncheckedUpdateWithoutUniversityInputSchema } from './WeekUncheckedUpdateWithoutUniversityInputSchema';

export const WeekUpdateWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpdateWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WeekUpdateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedUpdateWithoutUniversityInputSchema) ]),
}).strict();

export default WeekUpdateWithWhereUniqueWithoutUniversityInputSchema;
