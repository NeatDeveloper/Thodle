import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';
import { UniversityUpdateWithoutBuildingsInputSchema } from './UniversityUpdateWithoutBuildingsInputSchema';
import { UniversityUncheckedUpdateWithoutBuildingsInputSchema } from './UniversityUncheckedUpdateWithoutBuildingsInputSchema';

export const UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUpdateToOneWithWhereWithoutBuildingsInput> = z.object({
  where: z.lazy(() => UniversityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UniversityUpdateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutBuildingsInputSchema) ]),
}).strict();

export default UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema;
