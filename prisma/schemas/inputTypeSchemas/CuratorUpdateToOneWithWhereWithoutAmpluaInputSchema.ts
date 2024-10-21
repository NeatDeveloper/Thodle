import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';
import { CuratorUpdateWithoutAmpluaInputSchema } from './CuratorUpdateWithoutAmpluaInputSchema';
import { CuratorUncheckedUpdateWithoutAmpluaInputSchema } from './CuratorUncheckedUpdateWithoutAmpluaInputSchema';

export const CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => CuratorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export default CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema;
