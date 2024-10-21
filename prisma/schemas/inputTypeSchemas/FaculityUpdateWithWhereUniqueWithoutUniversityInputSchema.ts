import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityUpdateWithoutUniversityInputSchema } from './FaculityUpdateWithoutUniversityInputSchema';
import { FaculityUncheckedUpdateWithoutUniversityInputSchema } from './FaculityUncheckedUpdateWithoutUniversityInputSchema';

export const FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpdateWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutUniversityInputSchema) ]),
}).strict();

export default FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema;
