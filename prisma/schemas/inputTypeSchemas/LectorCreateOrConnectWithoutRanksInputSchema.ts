import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorCreateWithoutRanksInputSchema } from './LectorCreateWithoutRanksInputSchema';
import { LectorUncheckedCreateWithoutRanksInputSchema } from './LectorUncheckedCreateWithoutRanksInputSchema';

export const LectorCreateOrConnectWithoutRanksInputSchema: z.ZodType<Prisma.LectorCreateOrConnectWithoutRanksInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]),
}).strict();

export default LectorCreateOrConnectWithoutRanksInputSchema;
