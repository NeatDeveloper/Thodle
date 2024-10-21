import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaCreateWithoutCuratorInputSchema } from './AmpluaCreateWithoutCuratorInputSchema';
import { AmpluaUncheckedCreateWithoutCuratorInputSchema } from './AmpluaUncheckedCreateWithoutCuratorInputSchema';

export const AmpluaCreateOrConnectWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutCuratorInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]),
}).strict();

export default AmpluaCreateOrConnectWithoutCuratorInputSchema;
