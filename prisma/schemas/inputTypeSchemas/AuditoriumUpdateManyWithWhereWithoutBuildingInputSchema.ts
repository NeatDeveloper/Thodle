import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumScalarWhereInputSchema } from './AuditoriumScalarWhereInputSchema';
import { AuditoriumUpdateManyMutationInputSchema } from './AuditoriumUpdateManyMutationInputSchema';
import { AuditoriumUncheckedUpdateManyWithoutBuildingInputSchema } from './AuditoriumUncheckedUpdateManyWithoutBuildingInputSchema';

export const AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpdateManyWithWhereWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuditoriumUpdateManyMutationInputSchema),z.lazy(() => AuditoriumUncheckedUpdateManyWithoutBuildingInputSchema) ]),
}).strict();

export default AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema;
