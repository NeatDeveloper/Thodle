import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateWithoutBuildingsInputSchema } from './UniversityCreateWithoutBuildingsInputSchema';
import { UniversityUncheckedCreateWithoutBuildingsInputSchema } from './UniversityUncheckedCreateWithoutBuildingsInputSchema';
import { UniversityCreateOrConnectWithoutBuildingsInputSchema } from './UniversityCreateOrConnectWithoutBuildingsInputSchema';
import { UniversityUpsertWithoutBuildingsInputSchema } from './UniversityUpsertWithoutBuildingsInputSchema';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';
import { UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema } from './UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema';
import { UniversityUpdateWithoutBuildingsInputSchema } from './UniversityUpdateWithoutBuildingsInputSchema';
import { UniversityUncheckedUpdateWithoutBuildingsInputSchema } from './UniversityUncheckedUpdateWithoutBuildingsInputSchema';

export const UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema: z.ZodType<Prisma.UniversityUpdateOneRequiredWithoutBuildingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutBuildingsInputSchema).optional(),
  upsert: z.lazy(() => UniversityUpsertWithoutBuildingsInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema),z.lazy(() => UniversityUpdateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutBuildingsInputSchema) ]).optional(),
}).strict();

export default UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema;
