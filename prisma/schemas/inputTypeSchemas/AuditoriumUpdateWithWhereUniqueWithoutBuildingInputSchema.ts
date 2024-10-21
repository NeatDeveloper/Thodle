import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumWhereUniqueInputSchema } from './AuditoriumWhereUniqueInputSchema';
import { AuditoriumUpdateWithoutBuildingInputSchema } from './AuditoriumUpdateWithoutBuildingInputSchema';
import { AuditoriumUncheckedUpdateWithoutBuildingInputSchema } from './AuditoriumUncheckedUpdateWithoutBuildingInputSchema';

export const AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpdateWithWhereUniqueWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuditoriumUpdateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedUpdateWithoutBuildingInputSchema) ]),
}).strict();

export default AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema;
