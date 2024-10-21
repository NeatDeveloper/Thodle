import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';
import { BuildingUpdateWithoutUniversityInputSchema } from './BuildingUpdateWithoutUniversityInputSchema';
import { BuildingUncheckedUpdateWithoutUniversityInputSchema } from './BuildingUncheckedUpdateWithoutUniversityInputSchema';

export const BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpdateWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BuildingUpdateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutUniversityInputSchema) ]),
}).strict();

export default BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema;
