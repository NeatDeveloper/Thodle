import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaCreateWithoutGroupHeadInputSchema } from './AmpluaCreateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedCreateWithoutGroupHeadInputSchema } from './AmpluaUncheckedCreateWithoutGroupHeadInputSchema';

export const AmpluaCreateOrConnectWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutGroupHeadInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]),
}).strict();

export default AmpluaCreateOrConnectWithoutGroupHeadInputSchema;
