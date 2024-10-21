import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaUpdateWithoutCuratorInputSchema } from './AmpluaUpdateWithoutCuratorInputSchema';
import { AmpluaUncheckedUpdateWithoutCuratorInputSchema } from './AmpluaUncheckedUpdateWithoutCuratorInputSchema';

export const AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutCuratorInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutCuratorInputSchema) ]),
}).strict();

export default AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema;
