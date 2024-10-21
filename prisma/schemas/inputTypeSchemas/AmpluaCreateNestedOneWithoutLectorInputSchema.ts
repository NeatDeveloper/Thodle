import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutLectorInputSchema } from './AmpluaCreateWithoutLectorInputSchema';
import { AmpluaUncheckedCreateWithoutLectorInputSchema } from './AmpluaUncheckedCreateWithoutLectorInputSchema';
import { AmpluaCreateOrConnectWithoutLectorInputSchema } from './AmpluaCreateOrConnectWithoutLectorInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';

export const AmpluaCreateNestedOneWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutLectorInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutLectorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export default AmpluaCreateNestedOneWithoutLectorInputSchema;
