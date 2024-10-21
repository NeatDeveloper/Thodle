import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';
import { UniversityCreateWithoutBuildingsInputSchema } from './UniversityCreateWithoutBuildingsInputSchema';
import { UniversityUncheckedCreateWithoutBuildingsInputSchema } from './UniversityUncheckedCreateWithoutBuildingsInputSchema';

export const UniversityCreateOrConnectWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityCreateOrConnectWithoutBuildingsInput> = z.object({
  where: z.lazy(() => UniversityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]),
}).strict();

export default UniversityCreateOrConnectWithoutBuildingsInputSchema;
