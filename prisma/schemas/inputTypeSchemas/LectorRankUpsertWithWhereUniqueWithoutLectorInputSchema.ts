import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankWhereUniqueInputSchema } from './LectorRankWhereUniqueInputSchema';
import { LectorRankUpdateWithoutLectorInputSchema } from './LectorRankUpdateWithoutLectorInputSchema';
import { LectorRankUncheckedUpdateWithoutLectorInputSchema } from './LectorRankUncheckedUpdateWithoutLectorInputSchema';
import { LectorRankCreateWithoutLectorInputSchema } from './LectorRankCreateWithoutLectorInputSchema';
import { LectorRankUncheckedCreateWithoutLectorInputSchema } from './LectorRankUncheckedCreateWithoutLectorInputSchema';

export const LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpsertWithWhereUniqueWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LectorRankUpdateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedUpdateWithoutLectorInputSchema) ]),
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema) ]),
}).strict();

export default LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema;
