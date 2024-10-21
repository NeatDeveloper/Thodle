import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorUpdateWithoutRanksInputSchema } from './LectorUpdateWithoutRanksInputSchema';
import { LectorUncheckedUpdateWithoutRanksInputSchema } from './LectorUncheckedUpdateWithoutRanksInputSchema';
import { LectorCreateWithoutRanksInputSchema } from './LectorCreateWithoutRanksInputSchema';
import { LectorUncheckedCreateWithoutRanksInputSchema } from './LectorUncheckedCreateWithoutRanksInputSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorUpsertWithoutRanksInputSchema: z.ZodType<Prisma.LectorUpsertWithoutRanksInput> = z.object({
  update: z.union([ z.lazy(() => LectorUpdateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutRanksInputSchema) ]),
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]),
  where: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export default LectorUpsertWithoutRanksInputSchema;
