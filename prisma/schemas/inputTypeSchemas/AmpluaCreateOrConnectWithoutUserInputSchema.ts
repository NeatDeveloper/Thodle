import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaCreateWithoutUserInputSchema } from './AmpluaCreateWithoutUserInputSchema';
import { AmpluaUncheckedCreateWithoutUserInputSchema } from './AmpluaUncheckedCreateWithoutUserInputSchema';

export const AmpluaCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default AmpluaCreateOrConnectWithoutUserInputSchema;
