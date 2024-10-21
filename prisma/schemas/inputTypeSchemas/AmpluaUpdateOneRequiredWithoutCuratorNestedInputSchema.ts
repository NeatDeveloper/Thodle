import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutCuratorInputSchema } from './AmpluaCreateWithoutCuratorInputSchema';
import { AmpluaUncheckedCreateWithoutCuratorInputSchema } from './AmpluaUncheckedCreateWithoutCuratorInputSchema';
import { AmpluaCreateOrConnectWithoutCuratorInputSchema } from './AmpluaCreateOrConnectWithoutCuratorInputSchema';
import { AmpluaUpsertWithoutCuratorInputSchema } from './AmpluaUpsertWithoutCuratorInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema } from './AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema';
import { AmpluaUpdateWithoutCuratorInputSchema } from './AmpluaUpdateWithoutCuratorInputSchema';
import { AmpluaUncheckedUpdateWithoutCuratorInputSchema } from './AmpluaUncheckedUpdateWithoutCuratorInputSchema';

export const AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutCuratorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutCuratorInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema),z.lazy(() => AmpluaUpdateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutCuratorInputSchema) ]).optional(),
}).strict();

export default AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema;
