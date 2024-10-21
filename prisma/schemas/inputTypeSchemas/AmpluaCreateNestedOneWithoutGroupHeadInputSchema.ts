import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutGroupHeadInputSchema } from './AmpluaCreateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedCreateWithoutGroupHeadInputSchema } from './AmpluaUncheckedCreateWithoutGroupHeadInputSchema';
import { AmpluaCreateOrConnectWithoutGroupHeadInputSchema } from './AmpluaCreateOrConnectWithoutGroupHeadInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';

export const AmpluaCreateNestedOneWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutGroupHeadInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutGroupHeadInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export default AmpluaCreateNestedOneWithoutGroupHeadInputSchema;
