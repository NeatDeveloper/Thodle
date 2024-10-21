import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankWhereUniqueInputSchema } from './LectorRankWhereUniqueInputSchema';
import { LectorRankUpdateWithoutLectorInputSchema } from './LectorRankUpdateWithoutLectorInputSchema';
import { LectorRankUncheckedUpdateWithoutLectorInputSchema } from './LectorRankUncheckedUpdateWithoutLectorInputSchema';

export const LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpdateWithWhereUniqueWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LectorRankUpdateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedUpdateWithoutLectorInputSchema) ]),
}).strict();

export default LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema;
