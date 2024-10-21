import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';
import { BuildingCreateWithoutUniversityInputSchema } from './BuildingCreateWithoutUniversityInputSchema';
import { BuildingUncheckedCreateWithoutUniversityInputSchema } from './BuildingUncheckedCreateWithoutUniversityInputSchema';

export const BuildingCreateOrConnectWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export default BuildingCreateOrConnectWithoutUniversityInputSchema;
