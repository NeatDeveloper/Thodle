import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereInputSchema } from './BuildingWhereInputSchema';
import { BuildingUpdateWithoutAuditoriumsInputSchema } from './BuildingUpdateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedUpdateWithoutAuditoriumsInputSchema } from './BuildingUncheckedUpdateWithoutAuditoriumsInputSchema';

export const BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUpdateToOneWithWhereWithoutAuditoriumsInput> = z.object({
  where: z.lazy(() => BuildingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BuildingUpdateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutAuditoriumsInputSchema) ]),
}).strict();

export default BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema;
