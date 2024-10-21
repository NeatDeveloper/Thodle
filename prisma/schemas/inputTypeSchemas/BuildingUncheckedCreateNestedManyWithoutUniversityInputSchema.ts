import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingCreateWithoutUniversityInputSchema } from './BuildingCreateWithoutUniversityInputSchema';
import { BuildingUncheckedCreateWithoutUniversityInputSchema } from './BuildingUncheckedCreateWithoutUniversityInputSchema';
import { BuildingCreateOrConnectWithoutUniversityInputSchema } from './BuildingCreateOrConnectWithoutUniversityInputSchema';
import { BuildingCreateManyUniversityInputEnvelopeSchema } from './BuildingCreateManyUniversityInputEnvelopeSchema';
import { BuildingWhereUniqueInputSchema } from './BuildingWhereUniqueInputSchema';

export const BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingCreateWithoutUniversityInputSchema).array(),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuildingCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema;
