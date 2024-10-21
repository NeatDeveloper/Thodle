import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaUpdateWithoutTutorInputSchema } from './AmpluaUpdateWithoutTutorInputSchema';
import { AmpluaUncheckedUpdateWithoutTutorInputSchema } from './AmpluaUncheckedUpdateWithoutTutorInputSchema';

export const AmpluaUpdateToOneWithWhereWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutTutorInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutTutorInputSchema) ]),
}).strict();

export default AmpluaUpdateToOneWithWhereWithoutTutorInputSchema;
