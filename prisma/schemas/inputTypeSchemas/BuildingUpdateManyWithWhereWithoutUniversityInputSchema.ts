import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingScalarWhereInputSchema } from './BuildingScalarWhereInputSchema';
import { BuildingUpdateManyMutationInputSchema } from './BuildingUpdateManyMutationInputSchema';
import { BuildingUncheckedUpdateManyWithoutUniversityInputSchema } from './BuildingUncheckedUpdateManyWithoutUniversityInputSchema';

export const BuildingUpdateManyWithWhereWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpdateManyWithWhereWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BuildingUpdateManyMutationInputSchema),z.lazy(() => BuildingUncheckedUpdateManyWithoutUniversityInputSchema) ]),
}).strict();

export default BuildingUpdateManyWithWhereWithoutUniversityInputSchema;
