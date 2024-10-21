import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekScalarWhereInputSchema } from './WeekScalarWhereInputSchema';
import { WeekUpdateManyMutationInputSchema } from './WeekUpdateManyMutationInputSchema';
import { WeekUncheckedUpdateManyWithoutUniversityInputSchema } from './WeekUncheckedUpdateManyWithoutUniversityInputSchema';

export const WeekUpdateManyWithWhereWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpdateManyWithWhereWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WeekUpdateManyMutationInputSchema),z.lazy(() => WeekUncheckedUpdateManyWithoutUniversityInputSchema) ]),
}).strict();

export default WeekUpdateManyWithWhereWithoutUniversityInputSchema;
