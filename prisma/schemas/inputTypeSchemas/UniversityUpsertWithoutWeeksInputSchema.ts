import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityUpdateWithoutWeeksInputSchema } from './UniversityUpdateWithoutWeeksInputSchema';
import { UniversityUncheckedUpdateWithoutWeeksInputSchema } from './UniversityUncheckedUpdateWithoutWeeksInputSchema';
import { UniversityCreateWithoutWeeksInputSchema } from './UniversityCreateWithoutWeeksInputSchema';
import { UniversityUncheckedCreateWithoutWeeksInputSchema } from './UniversityUncheckedCreateWithoutWeeksInputSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const UniversityUpsertWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUpsertWithoutWeeksInput> = z.object({
  update: z.union([ z.lazy(() => UniversityUpdateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutWeeksInputSchema) ]),
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]),
  where: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export default UniversityUpsertWithoutWeeksInputSchema;
