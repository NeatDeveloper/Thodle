import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekWhereUniqueInputSchema } from './WeekWhereUniqueInputSchema';
import { WeekUpdateWithoutUniversityInputSchema } from './WeekUpdateWithoutUniversityInputSchema';
import { WeekUncheckedUpdateWithoutUniversityInputSchema } from './WeekUncheckedUpdateWithoutUniversityInputSchema';
import { WeekCreateWithoutUniversityInputSchema } from './WeekCreateWithoutUniversityInputSchema';
import { WeekUncheckedCreateWithoutUniversityInputSchema } from './WeekUncheckedCreateWithoutUniversityInputSchema';

export const WeekUpsertWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpsertWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WeekUpdateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedUpdateWithoutUniversityInputSchema) ]),
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export default WeekUpsertWithWhereUniqueWithoutUniversityInputSchema;
