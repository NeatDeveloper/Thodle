import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutCuratorInputSchema } from './AmpluaCreateWithoutCuratorInputSchema';
import { AmpluaUncheckedCreateWithoutCuratorInputSchema } from './AmpluaUncheckedCreateWithoutCuratorInputSchema';
import { AmpluaCreateOrConnectWithoutCuratorInputSchema } from './AmpluaCreateOrConnectWithoutCuratorInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';

export const AmpluaCreateNestedOneWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutCuratorInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export default AmpluaCreateNestedOneWithoutCuratorInputSchema;
