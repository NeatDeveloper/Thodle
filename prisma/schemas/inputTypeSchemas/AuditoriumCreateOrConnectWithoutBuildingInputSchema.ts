import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumWhereUniqueInputSchema } from './AuditoriumWhereUniqueInputSchema';
import { AuditoriumCreateWithoutBuildingInputSchema } from './AuditoriumCreateWithoutBuildingInputSchema';
import { AuditoriumUncheckedCreateWithoutBuildingInputSchema } from './AuditoriumUncheckedCreateWithoutBuildingInputSchema';

export const AuditoriumCreateOrConnectWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateOrConnectWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema) ]),
}).strict();

export default AuditoriumCreateOrConnectWithoutBuildingInputSchema;
