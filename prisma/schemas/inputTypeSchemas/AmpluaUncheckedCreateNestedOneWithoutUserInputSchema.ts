import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutUserInputSchema } from './AmpluaCreateWithoutUserInputSchema';
import { AmpluaUncheckedCreateWithoutUserInputSchema } from './AmpluaUncheckedCreateWithoutUserInputSchema';
import { AmpluaCreateOrConnectWithoutUserInputSchema } from './AmpluaCreateOrConnectWithoutUserInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';

export const AmpluaUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export default AmpluaUncheckedCreateNestedOneWithoutUserInputSchema;
