import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';
import { UniversityCreateWithoutWeeksInputSchema } from './UniversityCreateWithoutWeeksInputSchema';
import { UniversityUncheckedCreateWithoutWeeksInputSchema } from './UniversityUncheckedCreateWithoutWeeksInputSchema';

export const UniversityCreateOrConnectWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityCreateOrConnectWithoutWeeksInput> = z.object({
  where: z.lazy(() => UniversityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]),
}).strict();

export default UniversityCreateOrConnectWithoutWeeksInputSchema;
