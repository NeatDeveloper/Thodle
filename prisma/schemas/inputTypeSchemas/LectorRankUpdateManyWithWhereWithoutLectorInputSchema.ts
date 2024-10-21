import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankScalarWhereInputSchema } from './LectorRankScalarWhereInputSchema';
import { LectorRankUpdateManyMutationInputSchema } from './LectorRankUpdateManyMutationInputSchema';
import { LectorRankUncheckedUpdateManyWithoutLectorInputSchema } from './LectorRankUncheckedUpdateManyWithoutLectorInputSchema';

export const LectorRankUpdateManyWithWhereWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpdateManyWithWhereWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LectorRankUpdateManyMutationInputSchema),z.lazy(() => LectorRankUncheckedUpdateManyWithoutLectorInputSchema) ]),
}).strict();

export default LectorRankUpdateManyWithWhereWithoutLectorInputSchema;
