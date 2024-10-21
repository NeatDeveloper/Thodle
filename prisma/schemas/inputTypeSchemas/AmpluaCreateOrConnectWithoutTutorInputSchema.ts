import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaCreateWithoutTutorInputSchema } from './AmpluaCreateWithoutTutorInputSchema';
import { AmpluaUncheckedCreateWithoutTutorInputSchema } from './AmpluaUncheckedCreateWithoutTutorInputSchema';

export const AmpluaCreateOrConnectWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutTutorInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]),
}).strict();

export default AmpluaCreateOrConnectWithoutTutorInputSchema;
