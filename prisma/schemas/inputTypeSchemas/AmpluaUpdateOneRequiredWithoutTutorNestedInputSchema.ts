import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutTutorInputSchema } from './AmpluaCreateWithoutTutorInputSchema';
import { AmpluaUncheckedCreateWithoutTutorInputSchema } from './AmpluaUncheckedCreateWithoutTutorInputSchema';
import { AmpluaCreateOrConnectWithoutTutorInputSchema } from './AmpluaCreateOrConnectWithoutTutorInputSchema';
import { AmpluaUpsertWithoutTutorInputSchema } from './AmpluaUpsertWithoutTutorInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaUpdateToOneWithWhereWithoutTutorInputSchema } from './AmpluaUpdateToOneWithWhereWithoutTutorInputSchema';
import { AmpluaUpdateWithoutTutorInputSchema } from './AmpluaUpdateWithoutTutorInputSchema';
import { AmpluaUncheckedUpdateWithoutTutorInputSchema } from './AmpluaUncheckedUpdateWithoutTutorInputSchema';

export const AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutTutorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutTutorInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutTutorInputSchema),z.lazy(() => AmpluaUpdateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutTutorInputSchema) ]).optional(),
}).strict();

export default AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema;
