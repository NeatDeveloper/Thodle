import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorUpdateWithoutAmpluaInputSchema } from './LectorUpdateWithoutAmpluaInputSchema';
import { LectorUncheckedUpdateWithoutAmpluaInputSchema } from './LectorUncheckedUpdateWithoutAmpluaInputSchema';
import { LectorCreateWithoutAmpluaInputSchema } from './LectorCreateWithoutAmpluaInputSchema';
import { LectorUncheckedCreateWithoutAmpluaInputSchema } from './LectorUncheckedCreateWithoutAmpluaInputSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export default LectorUpsertWithoutAmpluaInputSchema;
