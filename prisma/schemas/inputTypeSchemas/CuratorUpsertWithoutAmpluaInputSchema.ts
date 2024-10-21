import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorUpdateWithoutAmpluaInputSchema } from './CuratorUpdateWithoutAmpluaInputSchema';
import { CuratorUncheckedUpdateWithoutAmpluaInputSchema } from './CuratorUncheckedUpdateWithoutAmpluaInputSchema';
import { CuratorCreateWithoutAmpluaInputSchema } from './CuratorCreateWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateWithoutAmpluaInputSchema } from './CuratorUncheckedCreateWithoutAmpluaInputSchema';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';

export const CuratorUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => CuratorWhereInputSchema).optional()
}).strict();

export default CuratorUpsertWithoutAmpluaInputSchema;
