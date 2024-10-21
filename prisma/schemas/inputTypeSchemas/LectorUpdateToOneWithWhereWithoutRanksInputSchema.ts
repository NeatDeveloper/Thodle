import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';
import { LectorUpdateWithoutRanksInputSchema } from './LectorUpdateWithoutRanksInputSchema';
import { LectorUncheckedUpdateWithoutRanksInputSchema } from './LectorUncheckedUpdateWithoutRanksInputSchema';

export const LectorUpdateToOneWithWhereWithoutRanksInputSchema: z.ZodType<Prisma.LectorUpdateToOneWithWhereWithoutRanksInput> = z.object({
  where: z.lazy(() => LectorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LectorUpdateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutRanksInputSchema) ]),
}).strict();

export default LectorUpdateToOneWithWhereWithoutRanksInputSchema;
