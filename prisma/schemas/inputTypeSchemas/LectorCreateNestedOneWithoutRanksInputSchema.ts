import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateWithoutRanksInputSchema } from './LectorCreateWithoutRanksInputSchema';
import { LectorUncheckedCreateWithoutRanksInputSchema } from './LectorUncheckedCreateWithoutRanksInputSchema';
import { LectorCreateOrConnectWithoutRanksInputSchema } from './LectorCreateOrConnectWithoutRanksInputSchema';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';

export const LectorCreateNestedOneWithoutRanksInputSchema: z.ZodType<Prisma.LectorCreateNestedOneWithoutRanksInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutRanksInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional()
}).strict();

export default LectorCreateNestedOneWithoutRanksInputSchema;
