import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutLectorInputSchema } from './AmpluaCreateWithoutLectorInputSchema';
import { AmpluaUncheckedCreateWithoutLectorInputSchema } from './AmpluaUncheckedCreateWithoutLectorInputSchema';
import { AmpluaCreateOrConnectWithoutLectorInputSchema } from './AmpluaCreateOrConnectWithoutLectorInputSchema';
import { AmpluaUpsertWithoutLectorInputSchema } from './AmpluaUpsertWithoutLectorInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaUpdateToOneWithWhereWithoutLectorInputSchema } from './AmpluaUpdateToOneWithWhereWithoutLectorInputSchema';
import { AmpluaUpdateWithoutLectorInputSchema } from './AmpluaUpdateWithoutLectorInputSchema';
import { AmpluaUncheckedUpdateWithoutLectorInputSchema } from './AmpluaUncheckedUpdateWithoutLectorInputSchema';

export const AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutLectorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutLectorInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutLectorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutLectorInputSchema),z.lazy(() => AmpluaUpdateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutLectorInputSchema) ]).optional(),
}).strict();

export default AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema;
