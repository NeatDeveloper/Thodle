import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingCreateWithoutAuditoriumsInputSchema } from './BuildingCreateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedCreateWithoutAuditoriumsInputSchema } from './BuildingUncheckedCreateWithoutAuditoriumsInputSchema';
import { BuildingCreateOrConnectWithoutAuditoriumsInputSchema } from './BuildingCreateOrConnectWithoutAuditoriumsInputSchema';
import { BuildingUpsertWithoutAuditoriumsInputSchema } from './BuildingUpsertWithoutAuditoriumsInputSchema';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';
import { BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema } from './BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema';
import { BuildingUpdateWithoutAuditoriumsInputSchema } from './BuildingUpdateWithoutAuditoriumsInputSchema';
import { BuildingUncheckedUpdateWithoutAuditoriumsInputSchema } from './BuildingUncheckedUpdateWithoutAuditoriumsInputSchema';

export const BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema: z.ZodType<Prisma.BuildingUpdateOneRequiredWithoutAuditoriumsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BuildingCreateOrConnectWithoutAuditoriumsInputSchema).optional(),
  upsert: z.lazy(() => BuildingUpsertWithoutAuditoriumsInputSchema).optional(),
  connect: z.lazy(() => BuildingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUpdateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutAuditoriumsInputSchema) ]).optional(),
}).strict();

export default BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema;
