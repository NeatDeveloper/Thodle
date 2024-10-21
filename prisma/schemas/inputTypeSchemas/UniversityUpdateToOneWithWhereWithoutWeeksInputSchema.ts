import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';
import { UniversityUpdateWithoutWeeksInputSchema } from './UniversityUpdateWithoutWeeksInputSchema';
import { UniversityUncheckedUpdateWithoutWeeksInputSchema } from './UniversityUncheckedUpdateWithoutWeeksInputSchema';

export const UniversityUpdateToOneWithWhereWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUpdateToOneWithWhereWithoutWeeksInput> = z.object({
  where: z.lazy(() => UniversityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UniversityUpdateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutWeeksInputSchema) ]),
}).strict();

export default UniversityUpdateToOneWithWhereWithoutWeeksInputSchema;
