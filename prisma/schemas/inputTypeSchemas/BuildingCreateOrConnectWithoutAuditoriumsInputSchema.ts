import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';
import { BuildingCreateWithoutAuditoriumsInputSchema } from './BuildingCreateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedCreateWithoutAuditoriumsInputSchema } from './BuildingUncheckedCreateWithoutAuditoriumsInputSchema';

export const BuildingCreateOrConnectWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutAuditoriumsInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]),
}).strict();

export default BuildingCreateOrConnectWithoutAuditoriumsInputSchema;
