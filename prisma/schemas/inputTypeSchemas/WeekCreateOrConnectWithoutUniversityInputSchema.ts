import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekWhereUniqueInputSchema } from './WeekWhereUniqueInputSchema';
import { WeekCreateWithoutUniversityInputSchema } from './WeekCreateWithoutUniversityInputSchema';
import { WeekUncheckedCreateWithoutUniversityInputSchema } from './WeekUncheckedCreateWithoutUniversityInputSchema';

export const WeekCreateOrConnectWithoutUniversityInputSchema: z.ZodType<Prisma.WeekCreateOrConnectWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export default WeekCreateOrConnectWithoutUniversityInputSchema;
