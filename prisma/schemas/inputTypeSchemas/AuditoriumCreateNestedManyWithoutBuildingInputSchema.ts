import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumCreateWithoutBuildingInputSchema } from './AuditoriumCreateWithoutBuildingInputSchema';
import { AuditoriumUncheckedCreateWithoutBuildingInputSchema } from './AuditoriumUncheckedCreateWithoutBuildingInputSchema';
import { AuditoriumCreateOrConnectWithoutBuildingInputSchema } from './AuditoriumCreateOrConnectWithoutBuildingInputSchema';
import { AuditoriumCreateManyBuildingInputEnvelopeSchema } from './AuditoriumCreateManyBuildingInputEnvelopeSchema';
import { AuditoriumWhereUniqueInputSchema } from './AuditoriumWhereUniqueInputSchema';

export const AuditoriumCreateNestedManyWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateNestedManyWithoutBuildingInput> = z.object({
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema).array(),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditoriumCreateManyBuildingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AuditoriumCreateNestedManyWithoutBuildingInputSchema;
