import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateWithoutGroupHeadInputSchema } from './AmpluaUpdateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedUpdateWithoutGroupHeadInputSchema } from './AmpluaUncheckedUpdateWithoutGroupHeadInputSchema';
import { AmpluaCreateWithoutGroupHeadInputSchema } from './AmpluaCreateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedCreateWithoutGroupHeadInputSchema } from './AmpluaUncheckedCreateWithoutGroupHeadInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaUpsertWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutGroupHeadInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutGroupHeadInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaUpsertWithoutGroupHeadInputSchema;
