import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateWithoutRanksInputSchema } from './LectorCreateWithoutRanksInputSchema';
import { LectorUncheckedCreateWithoutRanksInputSchema } from './LectorUncheckedCreateWithoutRanksInputSchema';
import { LectorCreateOrConnectWithoutRanksInputSchema } from './LectorCreateOrConnectWithoutRanksInputSchema';
import { LectorUpsertWithoutRanksInputSchema } from './LectorUpsertWithoutRanksInputSchema';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorUpdateToOneWithWhereWithoutRanksInputSchema } from './LectorUpdateToOneWithWhereWithoutRanksInputSchema';
import { LectorUpdateWithoutRanksInputSchema } from './LectorUpdateWithoutRanksInputSchema';
import { LectorUncheckedUpdateWithoutRanksInputSchema } from './LectorUncheckedUpdateWithoutRanksInputSchema';

export const LectorUpdateOneRequiredWithoutRanksNestedInputSchema: z.ZodType<Prisma.LectorUpdateOneRequiredWithoutRanksNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutRanksInputSchema).optional(),
  upsert: z.lazy(() => LectorUpsertWithoutRanksInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LectorUpdateToOneWithWhereWithoutRanksInputSchema),z.lazy(() => LectorUpdateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutRanksInputSchema) ]).optional(),
}).strict();

export default LectorUpdateOneRequiredWithoutRanksNestedInputSchema;
