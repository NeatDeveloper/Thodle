import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutGroupHeadInputSchema } from './AmpluaCreateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedCreateWithoutGroupHeadInputSchema } from './AmpluaUncheckedCreateWithoutGroupHeadInputSchema';
import { AmpluaCreateOrConnectWithoutGroupHeadInputSchema } from './AmpluaCreateOrConnectWithoutGroupHeadInputSchema';
import { AmpluaUpsertWithoutGroupHeadInputSchema } from './AmpluaUpsertWithoutGroupHeadInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema } from './AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema';
import { AmpluaUpdateWithoutGroupHeadInputSchema } from './AmpluaUpdateWithoutGroupHeadInputSchema';
import { AmpluaUncheckedUpdateWithoutGroupHeadInputSchema } from './AmpluaUncheckedUpdateWithoutGroupHeadInputSchema';

export const AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutGroupHeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutGroupHeadInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutGroupHeadInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUpdateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutGroupHeadInputSchema) ]).optional(),
}).strict();

export default AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema;
