import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateWithoutLectorInputSchema } from './AmpluaUpdateWithoutLectorInputSchema';
import { AmpluaUncheckedUpdateWithoutLectorInputSchema } from './AmpluaUncheckedUpdateWithoutLectorInputSchema';
import { AmpluaCreateWithoutLectorInputSchema } from './AmpluaCreateWithoutLectorInputSchema';
import { AmpluaUncheckedCreateWithoutLectorInputSchema } from './AmpluaUncheckedCreateWithoutLectorInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaUpsertWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutLectorInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutLectorInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaUpsertWithoutLectorInputSchema;
