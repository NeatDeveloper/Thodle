import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankWhereUniqueInputSchema } from './LectorRankWhereUniqueInputSchema';
import { LectorRankCreateWithoutLectorInputSchema } from './LectorRankCreateWithoutLectorInputSchema';
import { LectorRankUncheckedCreateWithoutLectorInputSchema } from './LectorRankUncheckedCreateWithoutLectorInputSchema';

export const LectorRankCreateOrConnectWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankCreateOrConnectWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema) ]),
}).strict();

export default LectorRankCreateOrConnectWithoutLectorInputSchema;
