import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutTutorInputSchema } from './AmpluaCreateWithoutTutorInputSchema';
import { AmpluaUncheckedCreateWithoutTutorInputSchema } from './AmpluaUncheckedCreateWithoutTutorInputSchema';
import { AmpluaCreateOrConnectWithoutTutorInputSchema } from './AmpluaCreateOrConnectWithoutTutorInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';

export const AmpluaCreateNestedOneWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutTutorInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export default AmpluaCreateNestedOneWithoutTutorInputSchema;
