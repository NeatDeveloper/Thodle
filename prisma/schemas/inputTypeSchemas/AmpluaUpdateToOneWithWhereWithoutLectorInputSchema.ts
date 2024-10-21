import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaUpdateWithoutLectorInputSchema } from './AmpluaUpdateWithoutLectorInputSchema';
import { AmpluaUncheckedUpdateWithoutLectorInputSchema } from './AmpluaUncheckedUpdateWithoutLectorInputSchema';

export const AmpluaUpdateToOneWithWhereWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutLectorInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutLectorInputSchema) ]),
}).strict();

export default AmpluaUpdateToOneWithWhereWithoutLectorInputSchema;
