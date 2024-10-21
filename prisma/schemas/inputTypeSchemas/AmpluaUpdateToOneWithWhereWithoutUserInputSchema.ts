import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaUpdateWithoutUserInputSchema } from './AmpluaUpdateWithoutUserInputSchema';
import { AmpluaUncheckedUpdateWithoutUserInputSchema } from './AmpluaUncheckedUpdateWithoutUserInputSchema';

export const AmpluaUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default AmpluaUpdateToOneWithWhereWithoutUserInputSchema;
