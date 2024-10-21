import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaUpdateWithoutGroupHeadInputSchema } from './AmpluaUpdateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedUpdateWithoutGroupHeadInputSchema } from './AmpluaUncheckedUpdateWithoutGroupHeadInputSchema';

export const AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutGroupHeadInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutGroupHeadInputSchema) ]),
}).strict();

export default AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema;
