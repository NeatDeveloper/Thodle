import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateWithoutUserInputSchema } from './AmpluaUpdateWithoutUserInputSchema';
import { AmpluaUncheckedUpdateWithoutUserInputSchema } from './AmpluaUncheckedUpdateWithoutUserInputSchema';
import { AmpluaCreateWithoutUserInputSchema } from './AmpluaCreateWithoutUserInputSchema';
import { AmpluaUncheckedCreateWithoutUserInputSchema } from './AmpluaUncheckedCreateWithoutUserInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaUpsertWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaUpsertWithoutUserInputSchema;
