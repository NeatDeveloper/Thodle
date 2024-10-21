import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumWhereUniqueInputSchema } from './AuditoriumWhereUniqueInputSchema';
import { AuditoriumUpdateWithoutBuildingInputSchema } from './AuditoriumUpdateWithoutBuildingInputSchema';
import { AuditoriumUncheckedUpdateWithoutBuildingInputSchema } from './AuditoriumUncheckedUpdateWithoutBuildingInputSchema';
import { AuditoriumCreateWithoutBuildingInputSchema } from './AuditoriumCreateWithoutBuildingInputSchema';
import { AuditoriumUncheckedCreateWithoutBuildingInputSchema } from './AuditoriumUncheckedCreateWithoutBuildingInputSchema';

export const AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpsertWithWhereUniqueWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuditoriumUpdateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedUpdateWithoutBuildingInputSchema) ]),
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema) ]),
}).strict();

export default AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema;
