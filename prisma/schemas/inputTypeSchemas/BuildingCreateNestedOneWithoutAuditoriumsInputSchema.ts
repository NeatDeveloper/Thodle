import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingCreateWithoutAuditoriumsInputSchema } from './BuildingCreateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedCreateWithoutAuditoriumsInputSchema } from './BuildingUncheckedCreateWithoutAuditoriumsInputSchema';
import { BuildingCreateOrConnectWithoutAuditoriumsInputSchema } from './BuildingCreateOrConnectWithoutAuditoriumsInputSchema';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';

export const BuildingCreateNestedOneWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingCreateNestedOneWithoutAuditoriumsInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BuildingCreateOrConnectWithoutAuditoriumsInputSchema).optional(),
  connect: z.lazy(() => BuildingWhereUniqueInputSchema).optional()
}).strict();

export default BuildingCreateNestedOneWithoutAuditoriumsInputSchema;
