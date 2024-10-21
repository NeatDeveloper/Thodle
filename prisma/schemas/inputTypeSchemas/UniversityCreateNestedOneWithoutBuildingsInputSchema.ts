import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateWithoutBuildingsInputSchema } from './UniversityCreateWithoutBuildingsInputSchema';
import { UniversityUncheckedCreateWithoutBuildingsInputSchema } from './UniversityUncheckedCreateWithoutBuildingsInputSchema';
import { UniversityCreateOrConnectWithoutBuildingsInputSchema } from './UniversityCreateOrConnectWithoutBuildingsInputSchema';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';

export const UniversityCreateNestedOneWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityCreateNestedOneWithoutBuildingsInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutBuildingsInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional()
}).strict();

export default UniversityCreateNestedOneWithoutBuildingsInputSchema;
