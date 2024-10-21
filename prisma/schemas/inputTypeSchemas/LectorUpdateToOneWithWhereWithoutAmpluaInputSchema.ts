import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';
import { LectorUpdateWithoutAmpluaInputSchema } from './LectorUpdateWithoutAmpluaInputSchema';
import { LectorUncheckedUpdateWithoutAmpluaInputSchema } from './LectorUncheckedUpdateWithoutAmpluaInputSchema';

export const LectorUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => LectorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export default LectorUpdateToOneWithWhereWithoutAmpluaInputSchema;
