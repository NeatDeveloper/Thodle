import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateWithoutCuratorInputSchema } from './AmpluaUpdateWithoutCuratorInputSchema';
import { AmpluaUncheckedUpdateWithoutCuratorInputSchema } from './AmpluaUncheckedUpdateWithoutCuratorInputSchema';
import { AmpluaCreateWithoutCuratorInputSchema } from './AmpluaCreateWithoutCuratorInputSchema';
import { AmpluaUncheckedCreateWithoutCuratorInputSchema } from './AmpluaUncheckedCreateWithoutCuratorInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaUpsertWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutCuratorInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutCuratorInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaUpsertWithoutCuratorInputSchema;
