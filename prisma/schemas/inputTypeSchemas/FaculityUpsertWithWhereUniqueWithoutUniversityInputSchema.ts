import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityUpdateWithoutUniversityInputSchema } from './FaculityUpdateWithoutUniversityInputSchema';
import { FaculityUncheckedUpdateWithoutUniversityInputSchema } from './FaculityUncheckedUpdateWithoutUniversityInputSchema';
import { FaculityCreateWithoutUniversityInputSchema } from './FaculityCreateWithoutUniversityInputSchema';
import { FaculityUncheckedCreateWithoutUniversityInputSchema } from './FaculityUncheckedCreateWithoutUniversityInputSchema';

export const FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpsertWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FaculityUpdateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutUniversityInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export default FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema;
