import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityUpdateWithoutBuildingsInputSchema } from './UniversityUpdateWithoutBuildingsInputSchema';
import { UniversityUncheckedUpdateWithoutBuildingsInputSchema } from './UniversityUncheckedUpdateWithoutBuildingsInputSchema';
import { UniversityCreateWithoutBuildingsInputSchema } from './UniversityCreateWithoutBuildingsInputSchema';
import { UniversityUncheckedCreateWithoutBuildingsInputSchema } from './UniversityUncheckedCreateWithoutBuildingsInputSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const UniversityUpsertWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUpsertWithoutBuildingsInput> = z.object({
  update: z.union([ z.lazy(() => UniversityUpdateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutBuildingsInputSchema) ]),
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]),
  where: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export default UniversityUpsertWithoutBuildingsInputSchema;
