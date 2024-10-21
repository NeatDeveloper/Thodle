import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';
import { BuildingUpdateWithoutUniversityInputSchema } from './BuildingUpdateWithoutUniversityInputSchema';
import { BuildingUncheckedUpdateWithoutUniversityInputSchema } from './BuildingUncheckedUpdateWithoutUniversityInputSchema';
import { BuildingCreateWithoutUniversityInputSchema } from './BuildingCreateWithoutUniversityInputSchema';
import { BuildingUncheckedCreateWithoutUniversityInputSchema } from './BuildingUncheckedCreateWithoutUniversityInputSchema';

export const BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpsertWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BuildingUpdateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutUniversityInputSchema) ]),
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export default BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema;
