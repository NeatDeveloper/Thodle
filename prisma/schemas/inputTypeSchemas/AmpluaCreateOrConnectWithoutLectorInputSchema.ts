import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaCreateWithoutLectorInputSchema } from './AmpluaCreateWithoutLectorInputSchema';
import { AmpluaUncheckedCreateWithoutLectorInputSchema } from './AmpluaUncheckedCreateWithoutLectorInputSchema';

export const AmpluaCreateOrConnectWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutLectorInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]),
}).strict();

export default AmpluaCreateOrConnectWithoutLectorInputSchema;
