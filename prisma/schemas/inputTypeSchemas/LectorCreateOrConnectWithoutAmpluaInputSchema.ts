import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorCreateWithoutAmpluaInputSchema } from './LectorCreateWithoutAmpluaInputSchema';
import { LectorUncheckedCreateWithoutAmpluaInputSchema } from './LectorUncheckedCreateWithoutAmpluaInputSchema';

export const LectorCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export default LectorCreateOrConnectWithoutAmpluaInputSchema;
