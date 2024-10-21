import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingUpdateWithoutAuditoriumsInputSchema } from './BuildingUpdateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedUpdateWithoutAuditoriumsInputSchema } from './BuildingUncheckedUpdateWithoutAuditoriumsInputSchema';
import { BuildingCreateWithoutAuditoriumsInputSchema } from './BuildingCreateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedCreateWithoutAuditoriumsInputSchema } from './BuildingUncheckedCreateWithoutAuditoriumsInputSchema';
import { BuildingWhereInputSchema } from './BuildingWhereInputSchema';

export const BuildingUpsertWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUpsertWithoutAuditoriumsInput> = z.object({
  update: z.union([ z.lazy(() => BuildingUpdateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutAuditoriumsInputSchema) ]),
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]),
  where: z.lazy(() => BuildingWhereInputSchema).optional()
}).strict();

export default BuildingUpsertWithoutAuditoriumsInputSchema;
