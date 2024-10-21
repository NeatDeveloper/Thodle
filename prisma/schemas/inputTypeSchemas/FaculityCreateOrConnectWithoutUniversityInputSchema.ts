import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityCreateWithoutUniversityInputSchema } from './FaculityCreateWithoutUniversityInputSchema';
import { FaculityUncheckedCreateWithoutUniversityInputSchema } from './FaculityUncheckedCreateWithoutUniversityInputSchema';

export const FaculityCreateOrConnectWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export default FaculityCreateOrConnectWithoutUniversityInputSchema;
