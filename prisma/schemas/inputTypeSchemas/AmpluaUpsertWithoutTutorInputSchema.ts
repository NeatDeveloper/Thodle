import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateWithoutTutorInputSchema } from './AmpluaUpdateWithoutTutorInputSchema';
import { AmpluaUncheckedUpdateWithoutTutorInputSchema } from './AmpluaUncheckedUpdateWithoutTutorInputSchema';
import { AmpluaCreateWithoutTutorInputSchema } from './AmpluaCreateWithoutTutorInputSchema';
import { AmpluaUncheckedCreateWithoutTutorInputSchema } from './AmpluaUncheckedCreateWithoutTutorInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaUpsertWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutTutorInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutTutorInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaUpsertWithoutTutorInputSchema;
